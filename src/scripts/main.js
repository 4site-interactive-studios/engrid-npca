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

};
