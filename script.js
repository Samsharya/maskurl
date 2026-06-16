function randStr(len) {
    const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let r = '';
    for (let i = 0; i < len; i++) r += c.charAt(Math.floor(Math.random() * c.length));
    return r;
}

function isValidUrl(s) {
    try { new URL(s); return true; } catch (_) { return false; }
}

function genMask() {
    const orig = document.getElementById('origUrl').value.trim();
    const domain = document.getElementById('customDomain').value.trim();
    const kw = document.getElementById('keyword').value.trim();
    const addRand = document.getElementById('addRandom').checked;
    const randLen = parseInt(document.getElementById('randomLength').value) || 8;
    const forceHttps = document.getElementById('forceHttps').checked;

    if (!orig || !domain || !kw) {
        Swal.fire({ icon: 'error', title: 'Missing Fields', text: 'Please fill in all fields.', background: '#0f1a2e', color: '#e8edf5', confirmButtonColor: '#667eea' });
        return;
    }

    if (!isValidUrl(orig)) {
        Swal.fire({ icon: 'error', title: 'Invalid URL', text: 'Please enter a valid URL with http:// or https://', background: '#0f1a2e', color: '#e8edf5', confirmButtonColor: '#667eea' });
        return;
    }

    let cleanOrig = orig.replace(/^https?:\/\//, '');
    let dispKw = kw;
    let randStrVal = '';

    if (addRand) {
        randStrVal = randStr(randLen);
        dispKw = kw + '-' + randStrVal;
    }

    const proto = forceHttps ? 'https' : 'https';
    const masked = proto + '://' + domain + '-' + dispKw + '@' + cleanOrig;
    const maskedHttp = 'http://' + domain + '-' + dispKw + '@' + cleanOrig;
    const maskedSimple = 'https://' + domain + '-' + kw + '@' + cleanOrig;

    document.getElementById('previewUrl').textContent = masked;
    displayResults([
        { type: 'Recommended', url: masked, note: addRand ? 'random: ' + randStrVal : 'no random' },
        { type: 'HTTP Version', url: maskedHttp, note: 'may work in some browsers' },
        { type: 'Simple', url: maskedSimple, note: 'keyword only' }
    ]);

    Swal.fire({ icon: 'success', title: 'Generated!', text: 'Your masked URLs are ready below.', timer: 1500, showConfirmButton: false, background: '#0f1a2e', color: '#e8edf5' });
}

function displayResults(results) {
    const c = document.getElementById('resultsContainer');
    const list = document.getElementById('resultsList');
    const count = document.getElementById('urlCount');

    c.classList.add('active');
    list.innerHTML = '';

    results.forEach((r, i) => {
        const parts = r.url.split('@');
        const before = parts[0] || '';
        const after = parts[1] || '';

        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
            <div class="result-header">
                <span class="result-type">${r.type}</span>
                <span class="result-note">#${i+1}</span>
            </div>
            <div class="result-url">
                <span class="domain-part">${before}</span>
                <span class="at-symbol">@</span>
                <span class="real-part">${after}</span>
            </div>
            ${r.note ? '<div style="font-size:11px;color:rgba(232,237,245,0.25);margin-bottom:8px;">' + r.note + '</div>' : ''}
            <div class="btn-group">
                <button class="btn-copy" onclick="copyUrl('${r.url}')"><i class="fas fa-copy"></i> Copy</button>
                <button class="btn-test" onclick="testUrl('${r.url}')"><i class="fas fa-external-link-alt"></i> Test</button>
            </div>
        `;
        list.appendChild(item);
    });

    count.textContent = results.length + ' URLs generated';
}

function copyUrl(t) {
    navigator.clipboard.writeText(t).then(() => {
        const btn = event.target.closest('button');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        btn.classList.add('copied');
        setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('copied'); }, 2000);
    }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = t;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        Swal.fire({ icon: 'success', title: 'Copied!', timer: 1000, showConfirmButton: false, background: '#0f1a2e', color: '#e8edf5' });
    });
}

function testUrl(u) {
    window.open(u, '_blank');
}

function updatePreview() {
    const orig = document.getElementById('origUrl').value.trim();
    const domain = document.getElementById('customDomain').value.trim();
    const kw = document.getElementById('keyword').value.trim();
    const addRand = document.getElementById('addRandom').checked;
    const randLen = parseInt(document.getElementById('randomLength').value) || 8;
    const forceHttps = document.getElementById('forceHttps').checked;

    if (!orig || !domain || !kw) {
        document.getElementById('previewUrl').textContent = 'fill in all fields';
        document.getElementById('previewUrl').style.color = 'rgba(232,237,245,0.2)';
        return;
    }

    let cleanOrig = orig.replace(/^https?:\/\//, '');
    let dispKw = kw;
    if (addRand) dispKw = kw + '-••••••••';

    const proto = forceHttps ? 'https' : 'https';
    document.getElementById('previewUrl').textContent = proto + '://' + domain + '-' + dispKw + '@' + cleanOrig;
    document.getElementById('previewUrl').style.color = '#8ba3d4';
}

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ once: true, duration: 600 });

    document.querySelectorAll('input').forEach(el => {
        el.addEventListener('input', updatePreview);
        el.addEventListener('change', () => {
            const d = {
                orig: document.getElementById('origUrl').value,
                domain: document.getElementById('customDomain').value,
                kw: document.getElementById('keyword').value,
                addRand: document.getElementById('addRandom').checked,
                randLen: document.getElementById('randomLength').value,
                forceHttps: document.getElementById('forceHttps').checked
            };
            localStorage.setItem('urlMasker', JSON.stringify(d));
        });
    });

    document.getElementById('addRandom').addEventListener('change', () => {
        document.getElementById('randomLengthGroup').style.display = 
            document.getElementById('addRandom').checked ? 'block' : 'none';
        updatePreview();
    });

    const saved = localStorage.getItem('urlMasker');
    if (saved) {
        try {
            const d = JSON.parse(saved);
            if (d.orig) document.getElementById('origUrl').value = d.orig;
            if (d.domain) document.getElementById('customDomain').value = d.domain;
            if (d.kw) document.getElementById('keyword').value = d.kw;
            if (d.addRand !== undefined) document.getElementById('addRandom').checked = d.addRand;
            if (d.randLen) document.getElementById('randomLength').value = d.randLen;
            if (d.forceHttps !== undefined) document.getElementById('forceHttps').checked = d.forceHttps;
            document.getElementById('randomLengthGroup').style.display = 
                document.getElementById('addRandom').checked ? 'block' : 'none';
            updatePreview();
        } catch (_) {}
    }

    updatePreview();
});
