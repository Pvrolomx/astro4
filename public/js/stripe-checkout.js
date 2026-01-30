// stripe-checkout.js - Sistema de consultas ASTRO4
// 5 consultas gratis + código de donación para 10 más

// ═══════════════════════════════════════════════════════
// CONFIGURACIÓN
// ═══════════════════════════════════════════════════════

const STRIPE_CONFIG = {
  publishableKey: 'pk_live_51SceBWPG43KliMINorbpT7H9ggnpju2C7OXgvdYdwaCrq5vq12c5AZv7PqDhR4XedTupwhONPhmIaqxi9pvhNljn00cvXoh4zL',
  prices: {
    pack10: 'price_1SsVusPG43KliMINvkZ9f1Wo',
    premiumMonthly: 'price_1SsVwKPG43KliMINIuhvF9Fv'
  },
  successUrl: window.location.origin + '/app.html?payment=success',
  cancelUrl: window.location.origin + '/app.html?payment=cancelled'
};

const FREE_USES_LIMIT = 5;
const STORAGE_KEY = 'astro4_usage';

// ═══════════════════════════════════════════════════════
// SISTEMA DE USOS
// ═══════════════════════════════════════════════════════

function getUsageData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return { count: 0, donated: false };
  try {
    return JSON.parse(stored);
  } catch {
    return { count: 0, donated: false };
  }
}

function saveUsageData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getUsageCount() {
  return getUsageData().count;
}

function incrementUsage() {
  const data = getUsageData();
  data.count++;
  saveUsageData(data);
  return data.count;
}

function hasReachedLimit() {
  const data = getUsageData();
  if (data.donated) return data.count >= (FREE_USES_LIMIT + 10);
  return data.count >= FREE_USES_LIMIT;
}

function getRemainingUses() {
  const data = getUsageData();
  const limit = data.donated ? FREE_USES_LIMIT + 10 : FREE_USES_LIMIT;
  return Math.max(0, limit - data.count);
}

// ═══════════════════════════════════════════════════════
// VALIDACIÓN DE CÓDIGO DE DONACIÓN
// ═══════════════════════════════════════════════════════

function validateDonationCode(code) {
  const now = new Date();
  const monthsES = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
  const monthsEN = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
  const currentMonth = now.getMonth();
  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  
  const validCodes = [
    `ASTRO-${monthsES[currentMonth]}`,
    `ASTRO-${monthsES[prevMonth]}`,
    `ASTRO-${monthsEN[currentMonth]}`,
    `ASTRO-${monthsEN[prevMonth]}`,
    `MAYA-${monthsES[currentMonth]}`,
    `MAYA-${monthsES[prevMonth]}`,
    `MAYA-${monthsEN[currentMonth]}`,
    `MAYA-${monthsEN[prevMonth]}`,
    'ASTRO-REGALO',
    'ASTRO-GIFT',
    'MAYA-REGALO',
    'MAYA-GIFT',
  ];
  
  return validCodes.includes(code.trim().toUpperCase());
}

function applyDonationCode(code) {
  if (validateDonationCode(code)) {
    const data = getUsageData();
    data.donated = true;
    // Reset count to give fresh 10 uses after the free 5
    data.count = FREE_USES_LIMIT; 
    saveUsageData(data);
    return true;
  }
  return false;
}

// ═══════════════════════════════════════════════════════
// STRIPE (mantenido por compatibilidad)
// ═══════════════════════════════════════════════════════

let stripe = null;

function initStripe() {
  if (typeof Stripe === 'undefined') return false;
  if (STRIPE_CONFIG.publishableKey.includes('REEMPLAZAR')) return false;
  stripe = Stripe(STRIPE_CONFIG.publishableKey);
  return true;
}

async function checkoutPack10() {
  if (!stripe && !initStripe()) {
    showToast('Stripe no disponible', true);
    return;
  }
  try {
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: STRIPE_CONFIG.prices.pack10, quantity: 1 }],
      mode: 'payment',
      successUrl: STRIPE_CONFIG.successUrl + '&product=pack10',
      cancelUrl: STRIPE_CONFIG.cancelUrl
    });
    if (error) showToast(error.message, true);
  } catch (err) {
    showToast('Error al procesar', true);
  }
}

async function checkoutPremium() {
  if (!stripe && !initStripe()) {
    showToast('Stripe no disponible', true);
    return;
  }
  try {
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: STRIPE_CONFIG.prices.premiumMonthly, quantity: 1 }],
      mode: 'subscription',
      successUrl: STRIPE_CONFIG.successUrl + '&product=premium',
      cancelUrl: STRIPE_CONFIG.cancelUrl
    });
    if (error) showToast(error.message, true);
  } catch (err) {
    showToast('Error al procesar', true);
  }
}

// ═══════════════════════════════════════════════════════
// UI HELPERS
// ═══════════════════════════════════════════════════════

function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = (isError ? '❌ ' : '✅ ') + message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  } else {
    alert(message);
  }
}

function updateCreditsUI() {
  const badge = document.getElementById('creditsBadge');
  if (!badge) return;
  
  const remaining = getRemainingUses();
  const data = getUsageData();
  
  if (remaining > 0) {
    badge.innerHTML = `🔮 ${remaining} consultas`;
    badge.className = data.donated ? 'credits-badge pack' : 'credits-badge free';
  } else {
    badge.innerHTML = '💫 Sin consultas';
    badge.className = 'credits-badge free';
  }
  badge.style.display = 'block';
}

// ═══════════════════════════════════════════════════════
// INICIALIZACIÓN
// ═══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  updateCreditsUI();
  setTimeout(() => initStripe(), 1000);
});
