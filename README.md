# maskurl
A modern URL masking tool for security research &amp; education. Generate obfuscated links using the @ syntax with custom domains, random strings, and HTTPS enforcement. Fully static - no API calls, runs entirely client-side. Dark theme with animations. Use responsibly - for authorized testing only.


```markdown
# 🔗 URL Masker

> **mask · obfuscate · redirect**

A modern, static URL masking tool that generates obfuscated links using the `@` syntax. Built for security professionals, researchers, and educational purposes.


```

---

## 🚀 Quick Start

### Option 1: GitHub Pages

1. Fork or clone this repository
2. Enable GitHub Pages in repository settings
3. Access at https://samsharya.github.io/maskurl

### Option 2: Local Usage


# Clone the repository
git clone `https://github.com/samsharya/url-masking-tool.git`
cd url-masking-tool
open index.html

---

## ⚠️ DISCLAIMER

**THIS TOOL IS FOR EDUCATIONAL AND AUTHORIZED SECURITY TESTING ONLY.**

- Using this tool for phishing, fraud, or any malicious activity is **illegal**
- The author assumes **zero liability** for misuse
- Always obtain **written permission** before testing on any system you don't own
- Some browsers may block or warn against masked URLs

**By using this tool, you agree that you are solely responsible for your actions.**

---

## 🎯 Features

- **No API calls** – everything runs client-side
- **Custom domain spoofing** – display any domain in the address bar
- **Random string generator** – adds realistic-looking random characters
- **HTTPS enforcement** – toggle secure protocol
- **Live preview** – see changes as you type
- **3 variants generated** – recommended, HTTP, and simple
- **One-click copy** – copy URLs to clipboard
- **Test links** – open masked URLs in new tab
- **Dark theme** – easy on the eyes
- **Animations** – smooth UI transitions
- **Local storage** – saves your inputs

---


🛠️ How It Works

The tool generates URLs in this format:

```
https://[custom-domain]-[keyword]-[random]@[original-url]
```

Example:

```
Input:
  Original: https://example.com/dashboard
  Domain:   facebook.com
  Keyword:  login
  Random:   enabled

Output:
  https://facebook.com-login-8xK7p2mN@example.com/dashboard
```

Breakdown:

Part Description
https:// Protocol (HTTP/HTTPS)
facebook.com-login-8xK7p2mN What users see in address bar
@ Separator (browser treats preceding as credentials)
example.com/dashboard Actual destination


---

🔧 Dependencies

All dependencies are loaded via CDN:

Library Purpose
Font Awesome 6.5.1 Icons
AOS 2.3.4 Scroll animations
Animate.css 4.1.1 CSS animations
GSAP 3.12.5 Advanced animations
SweetAlert2 11 Popup notifications

---

🌐 Browser Compatibility

Browser Support
Chrome 90+ ✅ Full
Firefox 88+ ✅ Full
Safari 14+ ✅ Full
Edge 90+ ✅ Full

---

⚡ Performance

· Zero backend – no server required
· No API calls – works offline
· Lightweight – < 50KB total
· Instant generation – no waiting

---

🔒 Privacy

· No data is sent anywhere
· Everything runs locally in your browser
· No tracking, analytics, or cookies
· Inputs are saved only to your local storage (optional)

---

📝 Legal & Ethical Use

✅ Permitted Use Cases

· Security awareness training
· Authorized penetration testing
· Red team exercises
· Educational demonstrations
· Research on URL obfuscation techniques
· Testing browser security features

❌ Prohibited Use Cases

· Phishing attacks
· Credential theft
· Malware distribution
· Any form of fraud or deception
· Unauthorized access to systems
· Violation of any applicable laws

---

🛡️ Detection & Prevention

How Modern Browsers Respond

Browser Behavior
Chrome Shows "Deceptive site ahead" warning
Firefox Displays "Suspected phishing page"
Safari Blocks and shows security alert
Edge Uses Microsoft Defender SmartScreen

Tips to Avoid Being Flagged

1. Use for legitimate testing only
2. Don't share masked URLs publicly
3. Use HTTPS whenever possible
4. Keep random strings moderate in length
5. Test in controlled environments

---

🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit changes (git commit -m 'Add amazing feature')
4. Push to branch (git push origin feature/amazing-feature)
5. Open a Pull Request

---

📄 License

This project is for educational purposes only. Redistribution and modification are permitted for non-commercial, educational use. Commercial use requires explicit permission.

---

👤 Author

Samsharya Gaire

· GitHub: @samsharya
· Instagram: @samsharyagaire

---

⭐ Support

If you find this tool useful for legitimate purposes:

· Star the repository
· Share it responsibly
· Report issues
· Suggest improvements

---

🙏 Acknowledgments

· Security researchers who study URL obfuscation
· Browser vendors for implementing security features
· Open source community for CDN libraries

---

📌 Version History

Version Date Changes
1.0.0 2026-06 Initial release
---

Last Updated: 2026 June 16

Remember: With great power comes great responsibility. Use this tool wisely and ethically.

```
