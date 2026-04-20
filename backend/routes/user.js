
const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const authService = require('../services/authService');

router.get('/profile', authenticate, (req, res) => {
    try {
        const user = authService.getUserById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found',
                code: 'USER_NOT_FOUND'
            });
        }

        res.json({
            success: true,
            data: { user }
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch profile',
            code: 'PROFILE_ERROR'
        });
    }
});

router.get('/dashboard', authenticate, (req, res) => {
    res.json({
        success: true,
        data: {
            message: 'Welcome to Amdox ERP Dashboard',
            modules: [
                { id: 'finance', name: 'Financial Ledger', icon: '💰', status: 'coming_soon' },
                { id: 'hr', name: 'HR & Payroll', icon: '👥', status: 'coming_soon' },
                { id: 'scm', name: 'Supply Chain', icon: '📦', status: 'coming_soon' },
                { id: 'project', name: 'Project Management', icon: '📋', status: 'coming_soon' },
                { id: 'bi', name: 'Business Intelligence', icon: '📊', status: 'coming_soon' },
                { id: 'ai', name: 'AI Forecasting', icon: '🤖', status: 'coming_soon' }
            ]
        }
    });
});

module.exports = router;
