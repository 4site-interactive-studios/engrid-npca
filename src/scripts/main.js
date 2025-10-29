import tippy from "tippy.js";

export const customScript = function (App) {
  const attriubtion = document.querySelector(
    ".media-with-attribution figattribution"
  );

  if (attriubtion) {
    const tippyInstance = attriubtion._tippy;
    if (tippyInstance) {
      tippyInstance.setProps({
        allowHTML: true,
        theme: "NPCA",
        placement: "left-end",
      });

      // Manually show the tooltip
      // tippyInstance.show();
    }
  }

  // Add your client scripts here

  // Transaction fee tooltip
  // Disabled per this request: https://www.bugherd.com/projects/429834/tasks/24
  // function addTransactionFeeTooltip() {
  //   const transactionFeeEl = document.querySelector(
  //     ".transaction-fee-opt-in .en__field__element--checkbox"
  //   );

  //   if (!transactionFeeEl) return;

  //   const transactionFeeTooltip = document.createElement("div");
  //   transactionFeeTooltip.classList.add("transaction-fee-tooltip");
  //   transactionFeeTooltip.innerHTML = "i";
  //   transactionFeeEl.appendChild(transactionFeeTooltip);

  //   tippy(transactionFeeTooltip, {
  //     content:
  //       "By checking this box, you agree to cover the transaction fee for your donation. This small additional amount helps us ensure that 100% of you donation goes directly to NPCA.",
  //     allowHTML: true,
  //     theme: "white",
  //     placement: "top",
  //     trigger: "mouseenter click",
  //     interactive: true,
  //     arrow: "<div class='custom-tooltip-arrow'></div>",
  //     offset: [0, 20],
  //   });
  // }

  // addTransactionFeeTooltip();
  // Limit the Address Field to 35 Characters which is the limit set by the Vantiv Payment Processor
  let enFieldAddressLine1 = document.querySelector(
    "input#en__field_supporter_address1"
  );
  if (enFieldAddressLine1) {
    enFieldAddressLine1.setAttribute("maxlength", "35");
  }
  const transactionGiveBySelect = document.getElementsByName(
    "transaction.giveBySelect"
  );
  const mobilePhoneContainer = document.querySelector(
    "div.en__field--phoneNumber2"
  );
  if (transactionGiveBySelect && mobilePhoneContainer) {
    // When ACH is selected, Mobile Phone becomes required
    transactionGiveBySelect.forEach((element) => {
      element.addEventListener("change", (event) => {
        const selectedValue = event.target.value;
        if (selectedValue.toLowerCase() === "ach") {
          mobilePhoneContainer.classList.add("en__field--required");
          const mobilePhoneInput = mobilePhoneContainer.querySelector("input");
          if (mobilePhoneInput) {
            mobilePhoneInput.setAttribute("required", "true");
            mobilePhoneInput.setAttribute("aria-required", "true");
            mobilePhoneInput.setAttribute(
              "placeholder",
              mobilePhoneInput
                .getAttribute("placeholder")
                .replace(" (Optional)", " (Required)")
            );
          }
        } else {
          mobilePhoneContainer.classList.remove("en__field--required");
          const mobilePhoneInput = mobilePhoneContainer.querySelector("input");
          if (mobilePhoneInput) {
            mobilePhoneInput.removeAttribute("required");
            mobilePhoneInput.setAttribute(
              "placeholder",
              mobilePhoneInput
                .getAttribute("placeholder")
                .replace(" (Required)", " (Optional)")
            );
          }
        }
      });
    });
  }
};
