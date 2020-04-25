const initExampleTabs = () => {
    const tabsButtons = document.querySelectorAll(`.examples__tabs-btn`);
    const tabs = document.querySelectorAll(`.examples__tabs-wrapper`);
    if (tabsButtons !== null) {
        tabsButtons.forEach((button) => {
            button.addEventListener(`click`, () => {
                tabsButtons.forEach((button) => button.classList.toggle(`examples__tabs-btn--active`));
                tabs.forEach((tab) => tab.classList.toggle(`examples__tabs-wrapper--hidden`));
            });
        })
    }
}

export default initExampleTabs;
