const app = Vue.createApp({
    data() {
        return {
            items: ['ACH', 'Oba', 'Cc', 'Dh', 'Sw', 'MRTP'],
            items_data: {
                'ACH': {
                    title: 'Programmatically create ACH debits and credits. Pro tip: use unique account numbers for each counterparty to simplify reconciliation.',
                    texts: ['We default to same-day ACH and hit every window.', 'Returns are correlated automatically.', 'Webhooks keep you up-to-date on each transfers lifecycle.'],
                    footer: 'Learn more about ACH.',
                    img: './images/64844.jpg'
                },
                'Oba': {
                    title: 'Open unlimited bank accounts of any kind, programmatically.',
                    text_1: 'Accounts and account numbers are separate.',
                    text_2: 'Accounts are available to use immediately.',
                    text_3: 'Funds are insured by the FDIC.',
                    footer: 'Learn more about bank accounts.',
                    img: './images/聖誕.png'
                },
                'Cc': {
                    title: 'Cards are available to use as soon as theyre created.',
                    text_1: 'Create as many cards as you need.',
                    text_2: 'Build on dedicated BIN ranges.',
                    text_3: 'Use limits or real-time decisions to build multi-layer risk controls.',
                    footer: 'Learn more about cards.',
                    img: './images/64845.jpg'
                },
                'Dh': {
                    title: 'Our lightweight API accepts files directly.',
                    text_1: 'Skip the OCR and leave that to us.',
                    text_2: 'Retrieve check images via API and dashboard.',
                    text_3: 'Lifecycle webhooks keep you up-to-date.',
                    footer: 'Learn more about checks.',
                    img: './images/2.jpg'
                },
                'Sw': {
                    title: 'Fast and reliable funds transfers.',
                    text_1: 'Available whenever Fedwire is.',
                    text_2: 'Trace numbers are instantly visible.',
                    text_3: 'Lifecycle webhooks keep you up-to-date.',
                    footer: 'Learn more about wires.',
                    img: './images/64842.jpg'
                },
                'MRTP': {
                    title: 'Move money instantly between participating banks.',
                    text_1: 'Available 24/7.',
                    text_2: 'Funds settle within seconds.',
                    text_3: '200+ financial instutions on the network.',
                    footer: 'Learn more about real-time payments on our product page.',
                    img: './images/聖誕節冬彌.png'
                },
            },
            currentItem: 'ACH',
        }
    },
    mounted() {
        
    }
}).mount('#app')