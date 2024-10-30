import { useEffect } from 'react';

const GooglePayButton = () => {
  useEffect(() => {
    const initializeGooglePay = () => {
      // Check if the google object is available
      if (typeof google === 'undefined') {
        console.error('Google Pay API not loaded');
        return;
      }

      const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });

      const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'mpgs', // Replace with your actual gateway
                gatewayMerchantId: '5473133970',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: '5473133970', // Your Google Merchant ID
          merchantName: 'ApplyBlitz',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPrice: '10.00',
          currencyCode: 'USD',
          countryCode: 'US',
        },
      };

      paymentsClient.isReadyToPay({ allowedPaymentMethods: paymentRequest.allowedPaymentMethods })
        .then((response) => {
          if (response.result) {
            const button = paymentsClient.createButton({
              onClick: () => onGooglePaymentButtonClick(paymentsClient, paymentRequest),
            });
            document.getElementById('google-pay-button').appendChild(button);
          } else {
            console.error('Google Pay is not available');
          }
        })
        .catch((error) => {
          console.error('Error checking Google Pay availability:', error);
        });
    };

    // Load the Google Pay script if it's not already loaded
    const loadGooglePayScript = () => {
      if (typeof google === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://pay.google.com/gp/p/js/pay.js';
        script.async = true;
        script.onload = initializeGooglePay; // Initialize Google Pay after the script is loaded
        document.body.appendChild(script);
      } else {
        initializeGooglePay();
      }
    };

    // Check if the document is fully loaded
    if (document.readyState === 'complete') {
      loadGooglePayScript();
    } else {
      window.onload = loadGooglePayScript; // Load script on window load
    }
  }, []);

  const onGooglePaymentButtonClick = (paymentsClient, paymentRequest) => {
    paymentsClient.loadPaymentData(paymentRequest)
      .then((paymentData) => {
        // Process paymentData here
        console.log('Payment data received:', paymentData);
      })
      .catch((error) => {
        console.error('Error loading payment data:', error);
      });
  };

  return <div id="google-pay-button"></div>;
};

export default GooglePayButton;
