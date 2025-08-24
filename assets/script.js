
(function () {
  const zh = {
    nav_products:"产品", nav_solutions:"解决方案", nav_platform:"平台", nav_resources:"资源",
    cta_contact:"联系销售",
    pill1:"符合 UL 1741 SB / IEEE 1547", pill2:"基于角色的权限", pill3:"策略 OTA 更新",
    h1:"企业级微电网控制 —— 可靠 · 模块化 · 自主",
    lead:"EnergizeOS™ 将 EMS 软件与工业级控制柜一体化，协调 BESS、光伏、柴油机与并网接口；适用于工商业微电网，支持零逆流、需量管理与并/离网无缝切换。",
    cta_demo:"预约在线演示 →", cta_spec:"下载规格书",
    kpi1:"近 12 个月现场可用率", kpi2:"峰值需量成本降低", kpi3:"每日编排事件次数", kpi4:"工业 HMI 原生分辨率",
    trusted:"深受工程团队与 EPC 合作伙伴信赖",
    prod_h2:"产品套件", prod_p:"软硬件一体化设计；核心许可 + 策略增值模块。",
    ecp_cat:"工业级硬件", ecp_title:"ECP — EMS 控制柜",
    ecp_b1:"带互锁链路的 DO/DI 控制（C1–C7）", ecp_b2:"原生 HMI 1280×800，基于角色的操作", ecp_b3:"Modbus TCP / RS-485 / CAN 网关",
    aipp_cat:"并网保护", aipp_title:"AIPP — 反孤岛保护柜",
    aipp_b1:"SEL-700G / CM-UFD.M33 继电器选型", aipp_b2:"零逆流执行，UVT + 分励脱扣", aipp_b3:"独立 UPS，FAT 脚本与日志",
    core_cat:"EMS 软件", core_title:"EnergizeOS™ 核心运行时",
    core_b1:"分时优化 / 需量控制 / 并↔离网", core_b2:"柴油机协调，光伏自发自用", core_b3:"策略 OTA 与遥测 API",
    lm:"了解更多 →",
    sol_h2:"工商业微电网解决方案",
    sol_p:"为工厂、园区与物流中心提供可靠供电；满足 Rule 21 / IEEE 1547；降低峰值电费并增强离网韧性。",
    sol_b1:"双通道检测确保零逆流", sol_b2:"并网↔离网无缝切换，相位同步 ≤ 5°",
    sol_b3:"多资产编排：BESS、PV、柴油机、关键负载", sol_b4:"可观测性：日志、告警与 FAT 测试套件",
    req_brief:"申请架构简报", dl_white:"下载白皮书",
    plat_h2:"平台能力", plat_p:"离线优先的可靠性，远程运维，模块化授权与 AI 优化。",
    pf1:"策略引擎", pf1p:"并行调度 TOU、DCM、PV 自耗与柴油机协调，冲突感知仲裁。",
    pf2:"工业 I/O", pf2p:"经由中间继电器的确定性 DO/DI 链；Modbus TCP/RTU 与 CAN。",
    pf3:"边缘优先运行时", pf3p:"本地运行，无需云；可导出到历史库或对象存储。",
    pf4:"HMI 1280×800", pf4p:"面向操作员的界面，角色门控操作、告警横幅、FAT 快速校验。",
    pf5:"零逆流执行", pf5p:"继电器 + 电表双通道；UVT + 分励联锁。",
    pf6:"分析 + OTA", pf6p:"遥测 API、审计日志与签名策略包。",
    pkg_h3:"获取工程资料包", pkg_p:"规格书、接线拓扑、互锁矩阵（C1–C7）、FAT 清单与 Modbus 映射（SEL-700G / SEL-735）。",
    pkg_zip:"下载 ZIP", pkg_portal:"打开文档门户",
    c1:"合规性", c1v:"UL 1741 SB / IEEE 1547 / Rule 21",
    c2:"柜体型号", c2v:"ECP Pro / AIPP-20C2H480K",
    c3:"授权", c3v:"运行时许可 + 策略增值模块",
    c4:"API", c4v:"REST + MQTT Webhooks",
    f_desc:"面向工商业微电网的一体化 EMS + 控制柜；以可靠性为先，为操作员而设计。",
    f_products:"产品", f_company:"公司", f_legal:"法律",
    f_ecp:"ECP — EMS 控制柜", f_aipp:"AIPP — 反孤岛保护柜", f_core:"核心运行时与增值模块",
    f_about:"关于我们", f_careers:"招聘", f_contact:"联系",
    f_terms:"条款", f_privacy:"隐私", f_security:"安全"
  };
  const EN_CACHE={}, PH_CACHE={};

  function captureEnglish(){
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(!(key in EN_CACHE)) EN_CACHE[key]=(el.textContent||"").trim();
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
      const key = el.getAttribute("data-i18n-ph");
      if(typeof el.placeholder!=="undefined" && !(key in PH_CACHE)) PH_CACHE[key]=el.placeholder;
    });
  }
  function applyLang(lang){
    const toZh = lang==="zh";
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(toZh){ if(zh[key]) el.textContent=zh[key]; }
      else { if(EN_CACHE[key]!=null) el.textContent=EN_CACHE[key]; }
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
      const key = el.getAttribute("data-i18n-ph");
      if(typeof el.placeholder!=="undefined"){
        if(toZh){ if(zh[key]) el.placeholder=zh[key]; }
        else { if(PH_CACHE[key]!=null) el.placeholder=PH_CACHE[key]; }
      }
    });
    document.documentElement.lang = toZh ? "zh" : "en";
    document.querySelectorAll(".lang a").forEach(a=>a.classList.remove("active"));
    const active = document.querySelector('.lang a[data-lang="'+lang+'"]');
    if(active) active.classList.add("active");
    try{ localStorage.setItem("lang", lang); }catch(e){}
  }
  function init(){
    captureEnglish();
    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get("lang");
    const saved = localStorage.getItem("lang");
    applyLang(paramLang || saved || "en");
    document.querySelectorAll("[data-lang]").forEach(btn=>{
      btn.addEventListener("click",e=>{e.preventDefault();applyLang(btn.getAttribute("data-lang"));});
    });
  }
  document.addEventListener("DOMContentLoaded", init);
})();
