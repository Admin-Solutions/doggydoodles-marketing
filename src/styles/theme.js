export const globalStyles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .fade-in-up {
    animation: fadeInUp 0.8s ease forwards;
    opacity: 0;
  }
  
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }
  .delay-5 { animation-delay: 0.5s; }
  
  .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .hover-lift:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    transition: all 0.3s ease;
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
  }
  
  .btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  .glass {
    background: rgba(30, 41, 59, 0.5);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(148, 163, 184, 0.1);
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #f1f5f9 0%, #60a5fa 50%, #f1f5f9 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientFlow 4s ease infinite;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .hero-visual {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .floating-card {
    position: absolute;
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(12px);
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid rgba(148, 163, 184, 0.1);
    animation: float 5s ease-in-out infinite;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  @media (max-width: 768px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 40px;
      text-align: center;
    }

    .hero-content {
      align-items: center;
    }

    .hero-content p {
      margin-left: auto;
      margin-right: auto;
    }

    .hero-buttons {
      justify-content: center;
      width: 100%;
    }

    .hero-buttons a {
      flex: 1;
      min-width: 200px;
      max-width: 300px;
      justify-content: center;
    }

    .hero-social-proof {
      justify-content: center;
    }

    .hero-visual {
      order: -1;
    }

    .floating-card {
      display: none;
    }
  }
`

export const colors = {
  bg: '#0a0a0f',
  bgCard: '#1e293b',
  bgCardDark: '#0f172a',
  text: '#f1f5f9',
  textSecondary: '#e2e8f0',
  textMuted: '#94a3b8',
  textDim: '#64748b',
  accent: '#60a5fa',
  accentDark: '#3b82f6',
  gold: '#f59e0b',
  green: '#22c55e',
  purple: '#8b5cf6',
  border: 'rgba(148, 163, 184, 0.1)',
}
