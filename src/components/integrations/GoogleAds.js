export const initializeGoogleAds = () => {
    const googleAdsId = "AW-710084538";
    
    window.dataLayer = window.dataLayer || [];

    window.gtag = function () {
        window.dataLayer.push(arguments);
    };

    (function () {
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-710084538';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.gtag('js', new Date());
            window.gtag('config', googleAdsId);
        };
    })();
}


// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-KJDJXKGS26"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-KJDJXKGS26');
// </script>
