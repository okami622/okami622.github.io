document.addEventListener("DOMContentLoaded", function () {
  const sectionHeaders = document.querySelectorAll(".section h2");

  sectionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const section = this.parentElement;
      const content = section.querySelector(".section-content");

      // トグル機能
      this.classList.toggle("collapsed");
      content.classList.toggle("collapsed");

      // 高さを動的に計算
      if (!content.classList.contains("collapsed")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0";
      }
    });
  });

  // 初期状態で全てのセクションの高さを設定
  const allSectionContents = document.querySelectorAll(".section-content");
  allSectionContents.forEach((content) => {
    if (!content.classList.contains("collapsed")) {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });

  // Back to top button
  const backToTop = document.getElementById("backToTop");
  const toggleBackToTop = () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  };
  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop();
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

