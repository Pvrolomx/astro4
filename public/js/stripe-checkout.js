// stripe-checkout.js - Integración Stripe para ASTRO4
// C11 RAYO - Fase 4.1

// ═══════════════════════════════════════════════════════
// CONFIGURACIÓN - REEMPLAZAR CON KEYS REALES
// ═══════════════════════════════════════════════════════

const STRIPE_CONFIG = {
  // Publishable key (pk_test para pruebas, pk_live para producción)
  publishableKey: 'pk_test_51SceBWPG43KliMIN8CCrVbsxoryl7hhPAJNs2r4JEk2HZ1tdUsbwGGW5T8ppvjevNoPMja4r3Tdl9mNGC2lkyF6V00TjFTKofG',
  
  // Price IDs de los productos (crear en Stripe Dashboard)
  prices: {
    pack10: 'price_REEMPLAZAR_PACK10',      // $29 MXN one-time
    premiumMonthly: 'price_REEMPLAZAR_PREMIUM' // $49 MXN/month
  },
  
  // URLs de retorno
  successUrl: window.location.origin + '/app.html?payment=success',
  cancelUrl: window.location.origin + '/app.html?payment=cancelled'
};

// ═══════════════════════════════════════════════════════
// INICIALIZACIÓN
// ═══════════════════════════════════════════════════════

let stripe = null;

function initStripe() {
  if (typeof Stripe === 'undefined') {
    console.error('Stripe.js no cargado');
    return false;
  }
  
  if (STRIPE_CONFIG.publishableKey.includes('REEMPLAZAR')) {
    console.warn('⚠️ Stripe: Usando key placeholder. Reemplazar con key real.');
    return false;
  }
  
  stripe = Stripe(STRIPE_CONFIG.publishableKey);
  console.log('✅ Stripe inicializado');
  return true;
}

// ═══════════════════════════════════════════════════════
// CHECKOUT
// ═══════════════════════════════════════════════════════

/**
 * Inicia checkout para Pack 10 Consultas
 */
async function checkoutPack10() {
  if (!stripe && !initStripe()) {
    showPaymentError('Stripe no disponible. Intenta más tarde.');
    return;
  }
  
  try {
    showPaymentLoading(true);
    
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: STRIPE_CONFIG.prices.pack10, quantity: 1 }],
      mode: 'payment',
      successUrl: STRIPE_CONFIG.successUrl + '&product=pack10',
      cancelUrl: STRIPE_CONFIG.cancelUrl
    });
    
    if (error) {
      console.error('Stripe error:', error);
      showPaymentError(error.message);
    }
  } catch (err) {
    console.error('Checkout error:', err);
    showPaymentError('Error al procesar. Intenta de nuevo.');
  } finally {
    showPaymentLoading(false);
  }
}

/**
 * Inicia checkout para Premium Mensual
 */
async function checkoutPremium() {
  if (!stripe && !initStripe()) {
    showPaymentError('Stripe no disponible. Intenta más tarde.');
    return;
  }
  
  try {
    showPaymentLoading(true);
    
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: STRIPE_CONFIG.prices.premiumMonthly, quantity: 1 }],
      mode: 'subscription',
      successUrl: STRIPE_CONFIG.successUrl + '&product=premium',
      cancelUrl: STRIPE_CONFIG.cancelUrl
    });
    
    if (error) {
      console.error('Stripe error:', error);
      showPaymentError(error.message);
    }
  } catch (err) {
    console.error('Checkout error:', err);
    showPaymentError('Error al procesar. Intenta de nuevo.');
  } finally {
    showPaymentLoading(false);
  }
}

// ═══════════════════════════════════════════════════════
// MANEJO DE CONSULTAS (localStorage)
// ═══════════════════════════════════════════════════════

const STORAGE_KEY = 'astro4_credits';

/**
 * Obtiene créditos disponibles
 */
function getCredits() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return { pack: 0, premium: false, premiumExpires: null };
  
  try {
    const data = JSON.parse(stored);
    
    // Verificar si premium expiró
    if (data.premium && data.premiumExpires) {
      if (new Date(data.premiumExpires) < new Date()) {
        data.premium = false;
        data.premiumExpires = null;
        saveCredits(data);
      }
    }
    
    return data;
  } catch {
    return { pack: 0, premium: false, premiumExpires: null };
  }
}

/**
 * Guarda créditos
 */
function saveCredits(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/**
 * Agrega créditos de pack
 */
function addPackCredits(amount = 10) {
  const credits = getCredits();
  credits.pack += amount;
  saveCredits(credits);
  updateCreditsUI();
}

/**
 * Activa premium por 30 días
 */
function activatePremium() {
  const credits = getCredits();
  credits.premium = true;
  const expires = new Date();
  expires.setDate(expires.getDate() + 30);
  credits.premiumExpires = expires.toISOString();
  saveCredits(credits);
  updateCreditsUI();
}

/**
 * Consume un crédito
 */
function useCredit() {
  const credits = getCredits();
  
  // Premium tiene créditos ilimitados
  if (credits.premium) return true;
  
  // Verificar créditos de pack
  if (credits.pack > 0) {
    credits.pack--;
    saveCredits(credits);
    updateCreditsUI();
    return true;
  }
  
  return false;
}

/**
 * Verifica si tiene acceso
 */
function hasAccess() {
  const credits = getCredits();
  return credits.premium || credits.pack > 0;
}

// ═══════════════════════════════════════════════════════
// UI HELPERS
// ═══════════════════════════════════════════════════════

function showPaymentLoading(show) {
  const loader = document.getElementById('paymentLoader');
  if (loader) {
    loader.style.display = show ? 'flex' : 'none';
  }
}

function showPaymentError(message) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = '❌ ' + message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  } else {
    alert(message);
  }
}

function showPaymentSuccess(product) {
  const toast = document.getElementById('toast');
  const message = product === 'premium' 
    ? '🎉 ¡Premium activado! Disfruta consultas ilimitadas.'
    : '🎉 ¡Pack agregado! Tienes 10 consultas disponibles.';
  
  if (toast) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 5000);
  }
}

function updateCreditsUI() {
  const credits = getCredits();
  const badge = document.getElementById('creditsBadge');
  
  if (badge) {
    if (credits.premium) {
      badge.innerHTML = '⭐ Premium';
      badge.className = 'credits-badge premium';
    } else if (credits.pack > 0) {
      badge.innerHTML = `🔮 ${credits.pack} consultas`;
      badge.className = 'credits-badge pack';
    } else {
      badge.innerHTML = '💫 Gratis';
      badge.className = 'credits-badge free';
    }
  }
}

// ═══════════════════════════════════════════════════════
// VERIFICAR RETORNO DE PAGO
// ═══════════════════════════════════════════════════════

function checkPaymentReturn() {
  const params = new URLSearchParams(window.location.search);
  const payment = params.get('payment');
  const product = params.get('product');
  
  if (payment === 'success' && product) {
    // Limpiar URL
    window.history.replaceState({}, document.title, window.location.pathname);
    
    // Agregar créditos según producto
    if (product === 'pack10') {
      addPackCredits(10);
    } else if (product === 'premium') {
      activatePremium();
    }
    
    showPaymentSuccess(product);
  } else if (payment === 'cancelled') {
    window.history.replaceState({}, document.title, window.location.pathname);
    showPaymentError('Pago cancelado');
  }
}

// ═══════════════════════════════════════════════════════
// INICIALIZACIÓN AL CARGAR
// ═══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Verificar retorno de Stripe
  checkPaymentReturn();
  
  // Actualizar UI de créditos
  updateCreditsUI();
  
  // Intentar inicializar Stripe
  setTimeout(() => initStripe(), 1000);
});

// Exportar funciones
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    checkoutPack10,
    checkoutPremium,
    getCredits,
    useCredit,
    hasAccess
  };
}
