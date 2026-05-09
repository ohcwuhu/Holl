function initCozeSDK(botTitle = '霍尔效应实验助手') {
    if (typeof CozeWebSDK === 'undefined') {
        console.warn('Coze Web SDK not loaded');
        return;
    }
    
    new CozeWebSDK.WebChatClient({
        config: {
            bot_id: '7634527397312266266',
        },
        componentProps: {
            title: botTitle,
        },
        auth: {
            type: 'token',
            token: 'pat_h7gRNuMk3lZkjlmiou3r9ZHrhfEkMsivPQTL7EnNMDjU4PQ2tngFwJRdpnOIQnGP',
            onRefreshToken: function () {
                return 'pat_h7gRNuMk3lZkjlmiou3r9ZHrhfEkMsivPQTL7EnNMDjU4PQ2tngFwJRdpnOIQnGP';
            }
        }
    });
}

function getExperimentFromLocalStorage() {
    return localStorage.getItem('selectedExperiment') || 'hall';
}

function saveExperimentToLocalStorage(experimentId) {
    localStorage.setItem('selectedExperiment', experimentId);
}

function clearExperimentData() {
    localStorage.removeItem('experimentData');
    localStorage.removeItem('analysisResult');
}