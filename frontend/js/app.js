
const APP_CONFIG = {
    API_BASE: 'http://localhost:5000/api',
    APP_NAME: 'Amdox ERP',
    TOKEN_KEY: 'amdox_access_token',
    REFRESH_KEY: 'amdox_refresh_token',
    USER_KEY: 'amdox_user'
};

function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span>${type === 'success' ? '✅' : '❌'}</span>
        <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease-in';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function showAlert(elementId, message, type = 'error') {
    const alert = document.getElementById(elementId);
    if (!alert) return;
    alert.className = `alert alert-${type} visible`;
    alert.innerHTML = `<span>${type === 'error' ? '⚠️' : '✅'}</span><span>${message}</span>`;
}

function hideAlert(elementId) {
    const alert = document.getElementById(elementId);
    if (!alert) return;
    alert.classList.remove('visible');
}

function setButtonLoading(btn, loading) {
    if (loading) {
        btn.classList.add('loading');
        btn.disabled = true;
    } else {
        btn.classList.remove('loading');
        btn.disabled = false;
    }
}

function isAuthenticated() {
    return !!localStorage.getItem(APP_CONFIG.TOKEN_KEY);
}

function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function requireGuest() {
    if (isAuthenticated()) {
        window.location.href = 'dashboard.html';
        return false;
    }
    return true;
}

function getStoredUser() {
    try {
        const userData = localStorage.getItem(APP_CONFIG.USER_KEY);
        return userData ? JSON.parse(userData) : null;
    } catch {
        return null;
    }
}

function storeAuthData(data) {
    localStorage.setItem(APP_CONFIG.TOKEN_KEY, data.accessToken);
    localStorage.setItem(APP_CONFIG.REFRESH_KEY, data.refreshToken);
    localStorage.setItem(APP_CONFIG.USER_KEY, JSON.stringify(data.user));
}

function clearAuthData() {
    localStorage.removeItem(APP_CONFIG.TOKEN_KEY);
    localStorage.removeItem(APP_CONFIG.REFRESH_KEY);
    localStorage.removeItem(APP_CONFIG.USER_KEY);
}

function getUserInitials(name) {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    return parts.length >= 2
        ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
        : parts[0][0].toUpperCase();
}
