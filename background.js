

const Policies = {
  
  DEFAULT: 'default',
  
  PUBLIC_INTERFACE_ONLY: 'default_public_interface_only',
  
  
  DISABLE_NON_PROXIED_UDP: 'disable_non_proxied_udp'
};


chrome.runtime.onInstalled.addListener(() => {
  
  const defaultPolicy = Policies.DISABLE_NON_PROXIED_UDP;
  chrome.storage.local.set({ policy: defaultPolicy }, () => {
    applyPolicy(defaultPolicy);
  });
});


function applyPolicy(policyValue) {
  if (!chrome.privacy || !chrome.privacy.network) {
    console.error("当前浏览器版本不支持 Privacy API");
    return;
  }

  chrome.privacy.network.webRTCIPHandlingPolicy.set({
    value: policyValue
  }, (details) => {
    if (chrome.runtime.lastError) {
      console.error("策略应用失败:", chrome.runtime.lastError);
    } else {
      console.log(`WebRTC 防护策略已更新为: ${policyValue}`);
    }
  });
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "updatePolicy") {
    applyPolicy(request.policy);
    
    sendResponse({ status: "success" });
  }
  
  return true;
});