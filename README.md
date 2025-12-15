# 🛡️ IronShield (铁盾)

> **Enterprise-grade WebRTC leak protection for Chrome.** > 基于 Chrome 原生 API 的企业级 WebRTC 隐私防护工具。

![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)
![Manifest](https://img.shields.io/badge/manifest-v3-success.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📖 Introduction (简介)

**IronShield** protects your real IP address from leaking via WebRTC. Unlike other extensions that rely on fragile JavaScript injection, IronShield leverages the native `chrome.privacy` API to enforce strict network routing policies at the browser kernel level.

**IronShield** 防止您的真实 IP 通过 WebRTC 泄露。不同于其他依赖脆弱 JS 注入的扩展，本工具利用 Chrome 原生 `chrome.privacy` API，在浏览器内核层级强制执行严格的网络路由策略。

## ✨ Features (特性)

* **Native API Control**: Uses `webRTCIPHandlingPolicy` for robust protection.
    * 使用原生 API 控制，非 JS 注入，更安全、更稳定。
* **VPN/Proxy Binding**: In "Max Protection" mode, WebRTC is forced to go through your proxy. If no proxy is present, UDP is blocked.
    * 代理绑定：在“最高防护”模式下，强制流量走代理，否则物理阻断。
* **Zero Overhead**: No content scripts injected into pages. Extremely lightweight.
    * 零性能损耗：不向页面注入任何脚本。
* **i18n Support**: Auto-detects English, Chinese (Simplified), Japanese, and Korean.
    * 多语言支持：自动适配中、英、日、韩语环境。

## ⚙️ Installation (安装)

Since this is a developer build, please install via "Load Unpacked":
由于这是开发构建版本，请通过“加载已解压的扩展程序”安装：

1.  Download or clone this repository. (下载或克隆本项目)
2.  Open Chrome and navigate to `chrome://extensions/`. (在 Chrome 打开扩展管理页)
3.  Enable **Developer mode** (top right). (开启右上角的“开发者模式”)
4.  Click **Load unpacked** and select the folder. (点击“加载已解压的扩展程序”并选择文件夹)

## 🛡️ Usage (使用说明)

Click the extension icon to switch between modes:

* **🔒 Max Protection (Recommended)**:
    * `disable_non_proxied_udp`
    * Forces WebRTC traffic through your proxy/VPN. Blocks direct connections to STUN servers.
    * **推荐**：强制走代理。如果没挂代理，WebRTC 将无法连接（防止直连泄露）。
    
* **⚠️ Medium Protection**:
    * `default_public_interface_only`
    * Hides your LAN IP (e.g., 192.168.x.x) but may still expose your public IP.
    * 仅隐藏内网 IP，公网 IP 仍可能泄露。

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Built with ❤️ for Privacy.*
