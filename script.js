/**
 * ICE REFRIGERAÇÃO — ENGENHARIA DE CONVERSÃO & INTERATIVIDADE
 * Script Vanilla ultra-otimizado para alta conversão no WhatsApp, diagnóstico interativo e navegação fluida.
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMERO = '5561985560892';

  // 1. Efeito de Scroll no Header
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 2. Menu Mobile Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // 3. Simulador de Diagnóstico Interativo (Pills)
  const pillGroups = document.querySelectorAll('.pill-group');
  pillGroups.forEach(group => {
    const buttons = group.querySelectorAll('.pill-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  // 4. Envio do Diagnóstico Formatado para o WhatsApp do Sr. Messias
  const btnEnviarDiagnostico = document.getElementById('btnEnviarDiagnostico');
  if (btnEnviarDiagnostico) {
    btnEnviarDiagnostico.addEventListener('click', () => {
      const getActiveVal = (groupName) => {
        const activeBtn = document.querySelector(`.pill-group[data-group="${groupName}"] .pill-btn.active`);
        return activeBtn ? activeBtn.getAttribute('data-val') : 'Não especificado';
      };

      const aparelho = getActiveVal('aparelho');
      const marca = getActiveVal('marca');
      const defeito = getActiveVal('defeito');
      const regiao = getActiveVal('regiao');

      const mensagem = `Olá, Ice Refrigeração! Vim pelo site e gostaria de solicitar uma visita técnica em domicílio com o Sr. Messias:

❄️ *Aparelho:* ${aparelho}
🏷️ *Marca:* ${marca}
⚠️ *Problema/Sintoma:* ${defeito}
📍 *Região no DF:* ${regiao}

Poderiam me informar a disponibilidade de horário e valores para atendimento hoje?`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // 5. Suavização de Accordions FAQ (fecha os demais ao abrir um)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.open) {
            otherItem.removeAttribute('open');
          }
        });
      }
    });
  });
});
