import tippy from "tippy.js";

export const customScript = function (App) {
  // Add your client scripts here

  // Transaction fee tooltip
  function addTransactionFeeTooltip() {
    const transactionFeeEl = document.querySelector(
      ".transaction-fee-opt-in .en__field__element--checkbox"
    );

    if (!transactionFeeEl) return;

    const transactionFeeTooltip = document.createElement("div");
    transactionFeeTooltip.classList.add("transaction-fee-tooltip");
    transactionFeeTooltip.innerHTML = "i";
    transactionFeeEl.appendChild(transactionFeeTooltip);

    tippy(transactionFeeTooltip, {
      content:
        "By checking this box, you agree to cover the transaction fee for your donation. This small additional amount helps us ensure that 100% of you donation goes directly to NPCA.",
      allowHTML: true,
      theme: "white",
      placement: "top",
      trigger: "mouseenter click",
      interactive: true,
      arrow: "<div class='custom-tooltip-arrow'></div>",
      offset: [0, 20],
    });
  }

  addTransactionFeeTooltip();

  const initializeExitIntent = (pageJson) => {
    if (typeof pageJson !== "undefined" && ["premiumgift", "donation"].includes(pageJson.pageType)) {
        const shouldRun = pageJson.redirectPresent 
            || (pageJson.pageNumber < pageJson.pageCount && !pageJson.redirectPresent);

        if (shouldRun) {
            const EngridExitIntent = {
                enabled: true,
                title: "Did you forget something?",
                text: "Your support will help NPCA continue to protect and conserve our national parks, ensuring that future generations can experience and enjoy the parks that mean so much to us.",
                buttonText: "Finish my donation",
                buttonLink: ".body-main",
                cookieName: "engrid-exit-intent-lightbox",
                cookieDuration: 1,
                triggers: {
                    visibilityState: true,
                    mousePosition: true,
                }
            };

            // Call the function to initialize or trigger the EngridExitIntent
            runExitIntent(EngridExitIntent);
        }
    }
};

const runExitIntent = (config) => {
    // Logic to initialize or display the exit intent functionality
    console.log("Exit Intent initialized with configuration:", config);

    // Example logic: Add your implementation here
    // You can create a modal, track behavior, or interact with the DOM
};

// Call the initializeExitIntent function with the pageJson object
initializeExitIntent(pageJson);



};
