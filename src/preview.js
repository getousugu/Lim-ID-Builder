/* src/preview.js */
import { parseTermsHTML, setupTooltips } from './dictionary.js';

// SVG Icons for Skill Attributes
export const ATTRIBUTE_ICONS = {
  slash: `
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M15,85 C35,60 60,35 85,15 C58,32 32,58 15,85 Z" fill="currentColor"/>
      <path d="M10,90 C45,85 75,55 90,10 C80,45 50,75 10,90 Z" fill="currentColor" opacity="0.8"/>
    </svg>
  `,
  pierce: `
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M10,48 h50 v-8 l25,10 l-25,10 v-8 h-50 z" fill="currentColor"/>
      <ellipse cx="45" cy="50" rx="8" ry="22" fill="none" stroke="currentColor" stroke-width="6" transform="rotate(-15 45 50)"/>
    </svg>
  `,
  strike: `
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M50,10 L58,33 L80,20 L68,43 L90,50 L68,57 L80,80 L58,67 L50,90 L42,67 L20,80 L32,57 L10,50 L32,43 L20,20 L42,33 Z" fill="currentColor"/>
    </svg>
  `,
  defense: `
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M20,15 L80,15 C80,15 80,55 50,85 C20,55 20,15 20,15 Z" fill="currentColor"/>
      <path d="M25,20 L75,20 L75,50 C75,68 50,80 50,80 C50,80 25,68 25,50 L25,20 Z" fill="#141211"/>
      <path d="M50,20 L50,80 M25,48 L75,48" stroke="currentColor" stroke-width="4"/>
    </svg>
  `,
  evade: `
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M50,20 C33.43,20 20,33.43 20,50 C20,66.57 33.43,80 50,80 C66.57,80 80,66.57 80,50 C80,42.5 77.2,35.6 72.6,30.4 L62.5,40.5 C65.5,43 67.5,46.8 67.5,50 C67.5,59.7 59.7,67.5 50,67.5 C40.3,67.5 32.5,59.7 32.5,50 C32.5,40.3 40.3,32.5 50,32.5 V42.5 L67.5,27.5 L50,12.5 V20 Z" fill="currentColor"/>
    </svg>
  `,
  counter: `
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M35,20 L65,20 C65,20 65,50 50,68 C35,50 35,20 35,20 Z" fill="currentColor" opacity="0.6"/>
      <path d="M25,75 L75,25 L80,30 L30,80 Z" fill="currentColor"/>
      <path d="M20,80 L30,70 M15,75 L25,65" stroke="currentColor" stroke-width="5"/>
    </svg>
  `,
  match_guard: `
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M20,15 L80,15 C80,15 80,55 50,85 C20,55 20,15 20,15 Z" fill="currentColor"/>
      <circle cx="72" cy="72" r="16" fill="#141211" stroke="currentColor" stroke-width="2"/>
      <path d="M72,64 L72,80 M64,72 L80,72" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `,
  match_counter: `
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M35,20 L65,20 C65,20 65,50 50,68 C35,50 35,20 35,20 Z" fill="currentColor" opacity="0.4"/>
      <path d="M25,75 L75,25 L80,30 L30,80 Z" fill="currentColor"/>
      <path d="M20,80 L30,70 M15,75 L25,65" stroke="currentColor" stroke-width="5"/>
      <path d="M35,20 L65,20 C65,20 65,50 50,68 C35,50 35,20 35,20 Z" fill="none" stroke="#ff9100" stroke-width="4" stroke-dasharray="4,4"/>
    </svg>
  `
};

// SVG Icons for Sins (Sin Affinities)
export const SIN_ICONS = {
  wrath: `
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #ff5252;">
      <path d="M12,2C12,2 17,7.5 17,11.5c0,2.8-2.2,5-5,5s-5-2.2-5-5C7,7.5 12,2 12,2z M12,5.5c-1,1.5-2.5,3.5-2.5,6c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5C14.5,9 13,7 12,5.5z"/>
    </svg>
  `,
  lust: `
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #ff9100;">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  `,
  sloth: `
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #ffd600;">
      <path d="M12.3 2a10 10 0 0 0-1.9 19.8 1 1 0 0 0 1.2-1.2 8 8 0 0 1 7.9-7.9 1 1 0 0 0 1.2-1.2A10 10 0 0 0 12.3 2z"/>
    </svg>
  `,
  gluttony: `
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #69f0ae;">
      <path d="M17 8C17 4 12 2 12 2S7 4 7 8c0 4 5 14 5 14s5-10 5-14z M12 5c1 1.5 2 3.5 2 5c0 2.5-2 4-2 4s-2-1.5-2-4c0-1.5 1-3.5 2-5z"/>
    </svg>
  `,
  gloom: `
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #00e5ff;">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  `,
  pride: `
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #448aff;">
      <path d="M2 4l3 14h14l3-14-6 5-4-7-4 7-6-5zM17 16H7v-2h10v2z"/>
    </svg>
  `,
  envy: `
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #e040fb;">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  `
};

const STATS_INFO = {
  hp: `<svg class="stat-icon" viewBox="0 0 24 24" fill="#ff5252"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  speed: `<svg class="stat-icon" viewBox="0 0 24 24" fill="#ffd600"><path d="M22 6H12l-1.4-1.4C10.2 4.2 9.7 4 9.2 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h19c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM15 16l-4-4h3V9h2v3h3l-4 4z"/></svg>`, // Boot alternative folder/run
  defense: `<svg class="stat-icon" viewBox="0 0 24 24" fill="#b0bec5"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`
};

const WEAPON_ICON = `<svg class="level-sword-icon" viewBox="0 0 24 24"><path d="M17.3 2.7l4 4-13.6 13.6-1.7.3.3-1.7L17.3 2.7M16 1.3l-2.6 2.6L17.5 8l2.6-2.6c.8-.8.8-2 0-2.8l-1.3-1.3c-.8-.8-2-.8-2.8 0zM3.9 15.7l1.4 1.4-2.8 2.8c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l2.8-2.8z"/></svg>`;

export function renderPreview(container, char) {
  if (!char) {
    container.innerHTML = `<div style="padding: 40px; text-align: center; color: var(--text-muted);">キャラクターが選択されていません</div>`;
    return;
  }

  const inlineDict = char.dictionary || [];

  // Left panel details HTML
  const imageHTML = char.image 
    ? `<div class="preview-character-image" style="background-image: url('${char.image}')"></div>`
    : `<div class="identity-card-image-placeholder">No Image Available</div>`;

  const traitsHTML = char.keywords.map(kw => `<span class="preview-keyword-pill">${kw}</span>`).join('');

  const staggerHTML = char.staggers && char.staggers.length > 0 
    ? char.staggers.map(val => {
        const pct = char.stats.hp > 0 ? Math.round((val / char.stats.hp) * 100) : 0;
        return `
          <div class="stagger-line">
            <span>混乱閾値</span>
            <span>${val} <strong class="stagger-percent">(${pct}%)</strong></span>
          </div>
        `;
      }).join('')
    : `<div style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 8px;">なし</div>`;

  // Get resistance display styles
  const getResistDisplay = (type, val) => {
    const labels = {
      fatal: { text: "脆弱", class: "fatal" },
      weak: { text: "弱点", class: "weak" },
      normal: { text: "普通", class: "normal" },
      resist: { text: "耐性", class: "resist" },
      immune: { text: "無効", class: "immune" },
      custom: { text: `カスタム (${val})`, class: "normal" }
    };
    
    let displayType = type;
    if (type === 'custom') {
      if (val >= 2.0) displayType = 'fatal';
      else if (val >= 1.5) displayType = 'weak';
      else if (val <= 0.0) displayType = 'immune';
      else if (val <= 0.5) displayType = 'resist';
      else displayType = 'normal';
    }

    const info = labels[type] || labels.normal;
    const valueText = type === 'custom' ? `x${val}` : `x${{fatal: 2, weak: 1.5, normal: 1, resist: 0.5, immune: 0}[type]}`;
    const cssClass = labels[displayType]?.class || "normal";
    
    return { text: `${info.text} (${valueText})`, class: cssClass };
  };

  const slashRes = getResistDisplay(char.resistances.slash, char.resistances.slashVal);
  const pierceRes = getResistDisplay(char.resistances.pierce, char.resistances.pierceVal);
  const strikeRes = getResistDisplay(char.resistances.strike, char.resistances.strikeVal);

  const leftPanelHTML = `
    <div class="preview-left">
      <div class="preview-character-image-box">
        ${imageHTML}
      </div>
      
      <div class="preview-basic-info">
        <div class="preview-name-title">
          <span>${char.name || "（名称未設定）"}</span>
          <span class="sinner-icon-rarity">★★★</span>
        </div>
        <div class="preview-team-title">${char.team || "所属・チーム未設定"}</div>
        
        <div class="preview-grid-stats">
          <div class="stat-item">
            ${STATS_INFO.hp}
            <span class="stat-label">最大HP</span>
            <span class="stat-value">${char.stats.hp}</span>
          </div>
          <div class="stat-item">
            <svg class="stat-icon" viewBox="0 0 24 24" fill="#ffd600" style="transform: rotate(45deg);"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span class="stat-label">速度</span>
            <span class="stat-value">${char.stats.speedMin}-${char.stats.speedMax}</span>
          </div>
          <div class="stat-item">
            ${STATS_INFO.defense}
            <span class="stat-label">防御補正</span>
            <span class="stat-value">${char.stats.defCorrection >= 0 ? '+' : ''}${char.stats.defCorrection}</span>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">耐性情報</div>
        <div class="preview-resistances">
          <div class="resist-card">
            ${ATTRIBUTE_ICONS.slash}
            <span class="resist-label">斬撃</span>
            <span class="resist-value ${slashRes.class}">${slashRes.text}</span>
          </div>
          <div class="resist-card">
            ${ATTRIBUTE_ICONS.pierce}
            <span class="resist-label">貫通</span>
            <span class="resist-value ${pierceRes.class}">${pierceRes.text}</span>
          </div>
          <div class="resist-card">
            ${ATTRIBUTE_ICONS.strike}
            <span class="resist-label">打撃</span>
            <span class="resist-value ${strikeRes.class}">${strikeRes.text}</span>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">混乱区間</div>
        <div class="preview-stagger-bar">
          ${staggerHTML}
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">特性キーワード</div>
        <div class="preview-keywords">
          ${traitsHTML || '<div style="color: var(--text-muted); font-size: 0.85rem;">なし</div>'}
        </div>
      </div>

      <div class="preview-metadata">
        <div class="meta-box">
          <div style="font-size: 0.7rem; text-transform: uppercase;">Season</div>
          <div class="meta-val">${char.season || "未設定"}</div>
        </div>
        <div class="meta-box">
          <div style="font-size: 0.7rem; text-transform: uppercase;">Release Date</div>
          <div class="meta-val">${char.releaseDate || "未設定"}</div>
        </div>
      </div>
    </div>
  `;

  // Right Panel tabs navigation
  const rightPanelHTML = `
    <div class="preview-right">
      <div class="tabs-header">
        <button class="tab-link active" data-target="preview-tab-s1">スキル1</button>
        <button class="tab-link" data-target="preview-tab-s2">スキル2</button>
        <button class="tab-link" data-target="preview-tab-s3">スキル3</button>
        <button class="tab-link" data-target="preview-tab-def">守備</button>
      </div>

      <div class="tab-content active" id="preview-tab-s1">
        <div class="preview-skills-container">
          ${renderSkillsList(char.skills.skill1, inlineDict)}
        </div>
      </div>
      
      <div class="tab-content" id="preview-tab-s2">
        <div class="preview-skills-container">
          ${renderSkillsList(char.skills.skill2, inlineDict)}
        </div>
      </div>

      <div class="tab-content" id="preview-tab-s3">
        <div class="preview-skills-container">
          ${renderSkillsList(char.skills.skill3, inlineDict)}
        </div>
      </div>

      <div class="tab-content" id="preview-tab-def">
        <div class="preview-skills-container">
          ${renderSkillsList(char.skills.defense, inlineDict, true)}
        </div>
      </div>

      <!-- Passives Section -->
      <div class="preview-section" style="margin-top: 32px;">
        <div class="preview-section-title">バトルパッシブ</div>
        <div>
          ${renderPassivesList(char.passives)}
        </div>
      </div>

      <!-- Support Passives Section -->
      <div class="preview-section">
        <div class="preview-section-title">サポートパッシブ</div>
        <div>
          ${renderPassivesList(char.supportPassives)}
        </div>
      </div>

      <!-- Panic Section -->
      <div class="preview-section">
        <div class="preview-section-title">パニック情報</div>
        <div class="panic-preview-box">
          <div class="panic-icon-container">
            <svg viewBox="0 0 24 24" style="width: 32px; height: 32px; fill: var(--danger-color);"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </div>
          <div class="panic-info">
            <h4 style="color: var(--danger-color); font-size: 1.05rem; margin-bottom: 4px;">${char.panic?.name || "パニック"}</h4>
            <div class="passive-desc">${parseTermsHTML(char.panic?.text || "1ターンの間行動しない", inlineDict)}</div>
          </div>
        </div>
      </div>

      <!-- Sanity Section -->
      <div class="preview-section">
        <div class="preview-section-title">精神力増減条件</div>
        <div class="sanity-condition-container">
          <div class="sanity-cond-box">
            <div class="sanity-cond-title">精神力増加条件</div>
            <div class="sanity-cond-list">${parseTermsHTML(char.sanity?.increase || "なし", inlineDict)}</div>
          </div>
          <div class="sanity-cond-box">
            <div class="sanity-cond-title">精神力減少条件</div>
            <div class="sanity-cond-list">${parseTermsHTML(char.sanity?.decrease || "なし", inlineDict)}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = `
    <div class="preview-layout">
      ${leftPanelHTML}
      ${rightPanelHTML}
    </div>
  `;

  // Setup tab toggles
  const tabLinks = container.querySelectorAll(".tab-link");
  const tabContents = container.querySelectorAll(".tab-content");

  tabLinks.forEach(link => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-target");
      
      tabLinks.forEach(l => l.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));
      
      link.classList.add("active");
      container.querySelector(`#${target}`).classList.add("active");
    });
  });

  // Setup tooltips inside preview
  setupTooltips(container);
}

// Helpers for rendering skills list
function renderSkillsList(skills, inlineDict, isDefenseTab = false) {
  if (!skills || skills.length === 0) {
    return `<div style="text-align: center; color: var(--text-muted); padding: 24px;">登録されているスキルはありません</div>`;
  }

  return skills.map((skill, index) => {
    // Determine octagon background color and inner icon
    const sinColor = `var(--sin-${skill.affinity || 'sloth'})`;
    
    // Choose appropriate SVG icon silhouette
    let iconKey = skill.atkType || 'slash'; // slash, pierce, strike
    if (isDefenseTab) {
      const type = skill.defenseType || 'defense'; // defense, evade, counter, match_guard, match_counter
      if (type === 'defense') iconKey = 'defense';
      else if (type === 'evade') iconKey = 'evade';
      else if (type === 'match_guard') iconKey = 'match_guard';
      else if (type === 'counter') iconKey = 'counter';
      else if (type === 'match_counter') iconKey = 'match_counter';
    }
    const svgIcon = ATTRIBUTE_ICONS[iconKey] || ATTRIBUTE_ICONS.slash;

    // Coins rendering
    const coinCount = parseInt(skill.coins) || 1;
    const unbreakableCount = parseInt(skill.unbreakableCoins) || 0;
    
    let coinsHTML = "";
    for (let c = 1; c <= coinCount; c++) {
      // Unbreakable coins are at the end
      const isUnbreakable = c > (coinCount - unbreakableCount);
      coinsHTML += `<div class="coin-token ${isUnbreakable ? 'unbreakable' : ''}"></div>`;
    }

    // Skill level indicator
    const levelVal = parseInt(skill.atkLevel) || 0;
    
    // Weight indicator ■ squares
    const weightVal = parseInt(skill.weight) || 1;
    let weightSquaresHTML = "";
    for (let w = 1; w <= 10; w++) {
      weightSquaresHTML += `<div class="weight-sq ${w <= weightVal ? '' : 'dim'}"></div>`;
    }

    // Special tags parsing
    let specialTagsHTML = "";
    const tags = [];
    if (skill.tagMatchImpossible) tags.push("【マッチ不可】");
    if (skill.tagTargetIndistinguishable) tags.push("【敵味方識別不可】");
    if (skill.tagTargetImmutable) tags.push("【対象変更不可】");
    if (skill.specialTagsText) {
      skill.specialTagsText.split(/[,，\n]/).forEach(t => {
        const trimmed = t.trim();
        if (trimmed) tags.push(`【${trimmed}】`);
      });
    }
    if (tags.length > 0) {
      specialTagsHTML = `<div class="special-tags-list">${tags.map(t => `<span class="special-tag">${t}</span>`).join('')}</div>`;
    }

    // Coin effects block
    let coinEffectsHTML = "";
    if (skill.coinEffects && skill.coinEffects.length > 0) {
      const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
      
      coinEffectsHTML = `
        <div class="coin-effects-preview-container">
          ${skill.coinEffects.map((effect, cIdx) => {
            if (!effect || !effect.text) return "";
            
            // Check if coin type is unbreakable
            const isUnbreakable = (cIdx + 1) > (coinCount - unbreakableCount);
            
            let finalEffectText = effect.text;
            if (isUnbreakable) {
              finalEffectText = `🔴破壊不能コイン\n${finalEffectText}`;
            }

            return `
              <div class="coin-effect-row">
                <div class="coin-num-badge" style="${isUnbreakable ? 'border-color: #ff5252; color: #ff5252;' : ''}">
                  ${romanNumerals[cIdx] || (cIdx + 1)}
                </div>
                <div class="coin-effect-text">
                  ${parseTermsHTML(finalEffectText, inlineDict)}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // Show Attack/Defense Level depending on role
    const isCounterType = isDefenseTab && (skill.defenseType === 'counter' || skill.defenseType === 'match_counter');
    const showAtkTypeIcon = !isDefenseTab || isCounterType;

    const levelTypeLabel = isDefenseTab && !isCounterType ? "防御レベル" : "攻撃レベル";
    const levelIcon = isDefenseTab && !isCounterType 
      ? `<svg class="level-sword-icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`
      : WEAPON_ICON;

    // Defense header tags label
    let defenseTypeBadge = "";
    if (isDefenseTab) {
      const labels = {
        defense: "防御",
        evade: "回避",
        match_guard: "マッチ可能ガード",
        counter: "反撃",
        match_counter: "マッチ可能反撃"
      };
      defenseTypeBadge = `<div class="resonance-badge" style="background-color: rgba(255,255,255,0.05); color: var(--text-secondary); border-color: var(--border-color); margin-bottom: 6px;">${labels[skill.defenseType] || "守備"}</div>`;
    }

    return `
      <div class="skill-card-preview" style="border-top: 3px solid ${sinColor};">
        <div class="skill-card-preview-header">
          <!-- Octagon & Base Power -->
          <div class="skill-card-left-badge-group">
            <span class="base-power-text">${skill.basePower || '0'}</span>
            <div class="octagon-badge-container">
              <div class="octagon-outer" style="background-color: ${sinColor};">
                <div class="octagon-inner">
                  ${svgIcon}
                </div>
                <!-- Small Sin hexagon badge -->
                <div class="sin-hexagon-badge" style="background-color: ${sinColor};">
                  <div class="sin-hexagon-inner">
                    <span class="sin-mini-icon">${SIN_ICONS[skill.affinity || 'sloth']}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="level-bonus-flag" style="background-color: ${sinColor};">
              +${skill.levelBonus || '0'}
            </div>
          </div>
          
          <!-- Banner & Coins -->
          <div class="skill-card-top-right">
            <div class="coins-row">
              ${coinsHTML}
            </div>
            <div class="skill-name-banner" style="--accent-color: ${sinColor};">
              ${skill.name || "（名称未設定）"}
            </div>
          </div>
        </div>

        <!-- Meta info: Attack level, weight, etc. -->
        <div class="skill-stats-row">
          ${defenseTypeBadge}
          <div class="skill-level-indicator">
            ${levelIcon}
            <span>${levelTypeLabel}</span>
            <span class="level-val">${levelVal}</span>
          </div>
          
          <div class="weight-indicator">
            <span>加重値</span>
            <div class="weight-squares">
              ${weightSquaresHTML}
            </div>
          </div>
        </div>

        <!-- Special Action Tags -->
        ${specialTagsHTML}

        <!-- Skill Main Body Effect -->
        ${skill.effectText ? `
          <div class="skill-card-body-text">
            ${parseTermsHTML(skill.effectText, inlineDict)}
          </div>
        ` : ''}

        <!-- Coin Effects Rows -->
        ${coinEffectsHTML}

        <!-- Flavor Text -->
        ${skill.flavorText ? `
          <div class="skill-flavor-text">
            ${skill.flavorText}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

// Helpers for passives rendering
function renderPassivesList(passives) {
  if (!passives || passives.length === 0) {
    return `<div style="color: var(--text-muted); font-size: 0.9rem; font-style: italic;">登録されているパッシブはありません</div>`;
  }

  return passives.map(passive => {
    const hasBadge = passive.count && passive.affinity;
    const badgeClass = hasBadge ? `resonance-badge ${passive.affinity}` : '';
    
    // Custom label text: e.g. "共鳴" or "保有"
    const labelType = passive.type === 'resonance' ? '共鳴' : (passive.type === 'own' ? '保有' : '');
    
    const badgeHTML = hasBadge 
      ? `<span class="${badgeClass}">${SIN_ICONS[passive.affinity]} × ${passive.count} ${labelType}</span>`
      : '';

    return `
      <div class="passive-item-preview">
        <div class="passive-name-row">
          <span class="passive-name">${passive.name || "（名称未設定）"}</span>
          ${badgeHTML}
        </div>
        <div class="passive-desc">${parseTermsHTML(passive.text || "", [])}</div>
        ${passive.flavorText ? `<div class="passive-flavor">${passive.flavorText}</div>` : ''}
      </div>
    `;
  }).join('');
}
