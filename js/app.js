// CONSTRUCTOR

// CONSTRUCTOR

const isMobile = window.matchMedia("(max-width: 991.98px)");

const plates = [
  {
    id: 0,
    icon: `<div class="ct_el_color_1 ct_el d1261" id="cont_tab_b" style=" z-index: 101; top: 6px; left: 23.3px; width: 393.3px; height: 295px; line-height: 295px; font-family: dztab-74; font-size: 295px; color: rgb(7, 96, 196); filter: drop-shadow( rgba(0, 0, 0, 0.25) -3px 3px 3px ); "></div> <div class="ct_el_color_2 ct_el d1262" id="cont_tab_s" style=" z-index: 102; top: 6px; left: 22.7px; width: 394.7px; height: 296px; line-height: 296px; font-family: dztab-74; font-size: 296px; color: rgb(255, 255, 255); "></div> <div class="ct_text ct_el_color_2 ct_el" id="t2_ct_text" data-radius="87" data-orient="5" data-ws="5" data-valign="text-top" data-angle="270" data-elips="10" data-font_style="normal" data-font_num="" data-font_size="39px" data-str_case="uplow" data-if_low_fs="0" data-if_up_fs="-11" data-if_up_top="3" data-if_low_top="0" data-justify="center" data-align="center" data-font_padding="0" data-font_scale="100" style=" z-index: 104; left: 112px; top: 108px; width: 216px; height: 39px; font-size: 39px; font-weight: 600; font-family: GeorgiaProdz; visibility: visible; color: rgb(255, 255, 255); "> <div class="ct_str"> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; transform: translate(212.36px, 24.44px) rotateZ(1.99rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top">я</i> </div> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; transform: translate(199.58px, 47.78px) rotateZ(2.23rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top">а</i> </div> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; transform: translate(181.86px, 66.29px) rotateZ(2.44rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top">в</i> </div> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; transform: translate(160.48px, 81.05px) rotateZ(2.64rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top">о</i> </div> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; transform: translate(133.09px, 92.06px) rotateZ(2.85rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top">н</i> </div> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; transform: translate(102.81px, 97.51px) rotateZ(3.07rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top">и</i> </div> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; transform: translate(78.28px, 96.66px) rotateZ(3.26rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top">б</i> </div> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; transform: translate(52.44px, 90.73px) rotateZ(3.45rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top">я</i> </div> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; transform: translate(25.7px, 78.88px) rotateZ(3.67rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top">Р</i> </div> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; min-width: 5px; transform: translate(22.84px, 69.03px) rotateZ(3.8rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top"> </i> </div> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; transform: translate(10.96px, 61.98px) rotateZ(3.89rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top">.</i> </div> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; transform: translate(-9.28px, 46.09px) rotateZ(4.06rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top">л</i> </div> <div class="ct_ch" style=" font-size: 39px; height: 39px; line-height: 39px; transform: translate(-20.59px, 22.54px) rotateZ(4.3rad) scaleX(-0.73) scaleY(-1); "> <i style="vertical-align: text-top">у</i> </div> </div> <b class="ct_path" style=" top: -97.8px; left: -18px; width: 252px; height: 234.6px; border-radius: 126px/117.3px; "></b> </div> <div class="ct_text ct_el_color_1 ct_el" id="t3_ct_text" data-radius="100000" data-ws="5" data-valign="text-bottom" data-font_style="normal" data-font_num="" data-font_size="90px" data-str_case="up" data-if_low_fs="0" data-if_up_fs="0" data-if_up_top="0" data-if_low_top="0" data-justify="center" data-align="center" data-font_padding="" data-font_scale="100" style=" z-index: 105; left: 177px; top: 62px; width: 86px; height: 90px; font-size: 90px; font-weight: 500; font-family: News706dz; line-height: 90px; text-align: center; font-style: normal; visibility: visible; color: rgb(7, 96, 196); "> <ul class="full-width" style="transform: scaleX(0.905)"> <li style=" font-size: 81px; transform: scaleX(1) scaleY(0.97536); "></li> <li style="transform: scaleX(1) scaleY(0.97536)"> 1 </li> <li style="transform: scaleX(1) scaleY(0.97536)"> 6 </li> <li style=" font-size: 81px; transform: scaleX(1) scaleY(0.97536); "></li> </ul> </div>`,
    img: `img/nameplates-page/00.png`,
  },
  {
    id: 1,
    icon: `<div class="ct_el_color_2 ct_el d1181" id="cont_tab_b" style="z-index: 101; top: 65px; left: 113.9px; width: 212.2px; height: 200px; line-height: 200px; font-family: dztab-74; font-size: 200px; color: rgb(255, 255, 255); filter: drop-shadow(rgba(0, 0, 0, 0.25) -3px 3px 3px);"></div><div class="ct_el_color_1 ct_el d1182" id="cont_tab_s" style="z-index: 102; top: 65px; left: 113.9px; width: 212.2px; height: 200px; line-height: 200px; font-family: dztab-74; font-size: 200px; color: rgb(7, 96, 196);"></div><div class="ct_text ct_el_color_2 ct_el" id="t3_ct_text" data-radius="100000" data-ws="5" data-valign="text-bottom" data-font_txt="Schoolbookdz" data-font_txt_size="105" data-font_txt_weight="600" data-font_style="normal" data-font_num="" data-font_size="133px" data-str_case="up" data-if_low_fs="0" data-if_up_fs="0" data-if_up_top="0" data-if_low_top="0" data-justify="center" data-align="center" data-font_padding="" data-font_scale="100" style="z-index: 105; left: 150px; top: 93px; width: 140px; height: 133px; font-size: 133px; font-weight: 600; font-family: Schoolbookdz; line-height: 133px; text-align: center; font-style: normal; visibility: visible; color: rgb(255, 255, 255);"><ul class="full-width" style="transform: scaleX(0.917);"><li style="font-family: Schoolbookdz; font-size: 105px; transform: scaleX(1) scaleY(0.978446);"></li><li style="transform: scaleX(1) scaleY(0.978446);">9</li><li style="transform: scaleX(1) scaleY(0.978446);">8</li><li style="font-family: Schoolbookdz; font-size: 105px; transform: scaleX(1) scaleY(0.978446);"></li></ul></div>`,
    img: `img/nameplates-page/01.png`,
  },
  {
    id: 2,
    icon: `<div class="ct_text ct_el_color_2 ct_el" id="t2_ct_text" data-radius="100000" data-ws="5" data-valign="text-bottom" data-font_style="normal" data-font_num="" data-font_size="43px" data-str_case="uplow" data-if_low_fs="0" data-if_up_fs="0" data-if_up_top="0" data-if_low_top="0" data-justify="center" data-align="center" data-font_padding="15" data-font_scale="95" style="z-index: 103; left: 63px; top: 152px; width: 314px; height: 43px; font-size: 43px; font-weight: 600; font-family: GeorgiaConddz; line-height: 43px; text-align: center; font-style: normal; visibility: visible; color: rgb(255, 255, 255);"><ul class="full-width" style="transform: scaleX(1);"><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);"></li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);">у</li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);">л</li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);">.</li><li style="min-width: 8.6px; padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);"></li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);">В</li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);">о</li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);">с</li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);">т</li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);">о</li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);">ч</li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);">н</li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);">а</li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);">я</li><li style="padding-left: 0.8px; padding-right: 0.8px; transform: scaleX(0.95) scaleY(1);"></li></ul></div><div class="ct_el_color_1 ct_el d521" id="cont_tab_b" style="z-index: 101; top: 90px; left: 43px; width: 354px; height: 118px; line-height: 118px; font-family: dztab-74; font-size: 118px; color: rgb(7, 96, 196); filter: drop-shadow(rgba(0, 0, 0, 0.25) -3px 3px 3px);"></div><div class="ct_el_color_2 ct_el d522" id="cont_tab_s" style="z-index: 102; top: 90px; left: 43px; width: 354px; height: 118px; line-height: 118px; font-family: dztab-74; font-size: 118px; color: rgb(255, 255, 255);"></div><div class="ct_text ct_el_color_1 ct_el" id="t3_ct_text" data-radius="100000" data-ws="5" data-valign="text-bottom" data-font_txt="GeorgiaConddz" data-font_txt_size="46" data-font_txt_weight="500" data-font_style="normal" data-font_num="" data-font_size="50px" data-str_case="up" data-if_low_fs="0" data-if_up_fs="0" data-if_up_top="0" data-if_low_top="0" data-justify="center" data-align="center" data-font_padding="4" data-font_scale="100" style="z-index: 105; left: 180px; top: 101px; width: 80px; height: 50px; font-size: 50px; font-weight: 500; font-family: News706dz; line-height: 50px; text-align: center; font-style: normal; visibility: visible; color: rgb(7, 96, 196);"><ul class="full-width" style="transform: scaleX(1);"><li style="padding-left: 0.9px; padding-right: 0.9px; font-family: GeorgiaConddz; font-size: 46px; transform: scaleX(1) scaleY(1);"></li><li style="padding-left: 0.9px; padding-right: 0.9px; transform: scaleX(1) scaleY(1);">6</li><li style="padding-left: 0.9px; padding-right: 0.9px; transform: scaleX(1) scaleY(1);">2</li><li style="padding-left: 0.9px; padding-right: 0.9px; font-family: GeorgiaConddz; font-size: 46px; transform: scaleX(1) scaleY(1);"></li></ul></div>`,
    img: `img/nameplates-page/02.png`,
  },
];

function platesInit() {
  if (!document.querySelector(".form-nameplates")) return;

  const iconBg = document.querySelector(".left-form-nameplates__bg");
  const items = document.querySelectorAll(".right-form-nameplates__slide");
  let activeItem = items[0];
  let activeItemIcon = document.querySelector(".left-form-nameplates__plate");

  const bgInputs = document.querySelectorAll(".js-plate-bg");
  const colorInputs = document.querySelectorAll(".js-plate-color");

  // Смена табличек
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    item.addEventListener("click", () => {
      const itemId = +item.dataset.id;
      const activeItemId = +activeItem.dataset.id;
      const direction = itemId > activeItemId ? "next" : "prev";

      resetInputs([...bgInputs, ...colorInputs]);
      activeItemIcon = changeIcon(activeItemIcon, itemId, direction);

      activeItem.classList.remove("right-form-nameplates__slide_active");
      item.classList.add("right-form-nameplates__slide_active");

      activeItem = item;
    });
  }

  // Смена заднего фона таблички
  changeColor(bgInputs, "ct_el_color_1");
  // Cмена цвета текста таблички
  changeColor(colorInputs, "ct_el_color_2");

  function changeColor(array, className) {
    for (let i = 0; i < array.length; i++) {
      const input = array[i];

      input.addEventListener("change", (e) => {
        e.stopPropagation();
        const color = input.nextElementSibling.style.backgroundColor;
        activeItemIcon
          .querySelectorAll(`.${className}`)
          .forEach((el) => (el.style.color = color));
      });
    }
  }

  // Смена таблички
  function changeIcon(activeItemIcon, itemId, direction) {
    activeItemIcon.style.left = direction === "next" ? "-100%" : "100%";
    const newIcon = getNewIcon(itemId, direction);
    iconBg.appendChild(newIcon);

    setTimeout(() => {
      activeItemIcon.remove();
      newIcon.style.left = "0";
    }, 600);

    return newIcon;
  }

  // Создание новой таблички
  function getNewIcon(itemId, direction) {
    const newIcon = document.createElement("div");
    const [newIconObJ] = plates.filter((obj) => obj.id === itemId);
    newIcon.classList.add("left-form-nameplates__plate");
    newIcon.style.left = direction === "next" ? "100%" : "-100%";
    newIcon.innerHTML = newIconObJ.icon;
    return newIcon;
  }

  // Обнуление цветов при смене таблички
  function resetInputs(array) {
    array.forEach((item) => (item.checked = false));
  }
}

// Удаление класса из коллекции
function _removeClass(array, removedClass) {
  for (let el of array) {
    el.classList.remove(removedClass);
  }
}

// Анимация появления
function _fadeIn(el) {
  var opacity = 0.1;

  el.style.opacity = opacity;
  el.style.display = "block";

  var timer = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(timer);
    }

    el.style.opacity = opacity;

    opacity += opacity * 0.1;
  }, 15);
}

// Динамический адаптив
class DynamicAdapt {
  constructor(type) {
    this.type = type;
  }

  init() {
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = [...document.querySelectorAll("[data-da]")];

    // наполнение оbjects объктами
    this.nodes.forEach((node) => {
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      const mode = dataArray[3] ? dataArray[3].trim() : false;
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      if (mode === "tabs") {
        оbject.destination = node.closest(`${dataArray[0].trim()}`);
      }
      this.оbjects.push(оbject);
    });

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = this.оbjects
      .map(
        ({ breakpoint }) =>
          `(${this.type}-width: ${breakpoint}px),${breakpoint}`
      )
      .filter((item, index, self) => self.indexOf(item) === index);

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    this.mediaQueries.forEach((media) => {
      const mediaSplit = media.split(",");
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = this.оbjects.filter(
        ({ breakpoint }) => breakpoint === mediaBreakpoint
      );
      matchMedia.addEventListener("change", () => {
        this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    });
  }

  // Основная функция
  mediaHandler(matchMedia, оbjects) {
    if (matchMedia.matches) {
      оbjects.forEach((оbject) => {
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      });
    } else {
      оbjects.forEach(({ parent, element, index }) => {
        if (element.classList.contains(this.daClassname)) {
          this.moveBack(parent, element, index);
        }
      });
    }
  }

  // Функция перемещения
  moveTo(place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === "last" || place >= destination.children.length) {
      destination.append(element);
      return;
    }
    if (place === "first") {
      destination.prepend(element);
      return;
    }
    destination.children[place].before(element);
  }

  // Функция возврата
  moveBack(parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
      parent.children[index].before(element);
    } else {
      parent.append(element);
    }
  }

  // Функция получения индекса внутри родителя
  indexInParent(parent, element) {
    return [...parent.children].indexOf(element);
  }

  // Функция сортировки массива по breakpoint и place
  // по возрастанию для this.type = min
  // по убыванию для this.type = max
  arraySort(arr) {
    if (this.type === "min") {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
          if (a.place === "first" || b.place === "last") {
            return -1;
          }
          if (a.place === "last" || b.place === "first") {
            return 1;
          }
          return a.place - b.place;
        }
        return a.breakpoint - b.breakpoint;
      });
    } else {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
          if (a.place === "first" || b.place === "last") {
            return 1;
          }
          if (a.place === "last" || b.place === "first") {
            return -1;
          }
          return b.place - a.place;
        }
        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  }
}

// Кастомный select
function select() {
  const selects = document.querySelectorAll("._select");

  // Show/Hide List with options
  function toggleList(currentSelect, currentContent) {
    if (currentSelect.getAttribute("data-state") === "active")
      closeList(currentSelect, currentContent);
    else openList(currentSelect, currentContent);
  }

  function openList(currentSelect, currentContent) {
    currentSelect.setAttribute("data-state", "active");
    const height = +window
      .getComputedStyle(currentSelect)
      .height.replace("px", "");

    if (height * currentContent.children.length >= height * 3) {
      setTimeout(() => {
        currentContent.style.overflow = "auto";
      }, 400);
    }
  }

  function closeList(currentSelect, currentContent) {
    currentContent.style.overflow = "hidden";
    currentSelect.setAttribute("data-state", "");
  }

  if (selects.length) {
    const selectTitles = document.querySelectorAll("._select__title");
    const selectItems = document.querySelectorAll("._select__label");
    const selectBackdrops = document.querySelectorAll("._select__backdrop");
    const selectedInputs = document.querySelectorAll(
      "._select__input[checked]"
    );

    window.addEventListener("DOMContentLoaded", () => {
      for (const input of selectedInputs) {
        const label = input.nextElementSibling;
        const selectElements = getClosest(label);
        const { title } = selectElements;

        title.innerHTML = label.innerHTML;
      }
    });

    for (let index = 0; index < selectTitles.length; index++) {
      const selectTitle = selectTitles[index];

      selectTitle.addEventListener("click", () => {
        const selectElements = getClosest(selectTitle);
        const { select } = selectElements;
        const { content } = selectElements;
        toggleList(select, content);
      });
    }

    for (let index = 0; index < selectItems.length; index++) {
      const item = selectItems[index];

      item.addEventListener("click", () => {
        const selectElements = getClosest(item);
        const { select } = selectElements;
        const { content } = selectElements;
        const { title } = selectElements;

        title.innerHTML = item.innerHTML;
        closeList(select, content);
      });
    }

    for (let index = 0; index < selectBackdrops.length; index++) {
      const backdrop = selectBackdrops[index];

      backdrop.addEventListener("click", () => {
        const selectElements = getClosest(backdrop);
        const { select } = selectElements;
        const { content } = selectElements;
        closeList(select, content);
      });
    }
  }

  function getClosest(item) {
    const select = item.closest("._select");
    return {
      select: select,
      content: select.querySelector("._select__content"),
      title: select.querySelector("._select__title"),
    };
  }
}

// Выбор количества товаров в input
function amount() {
  const counters = document.querySelectorAll("._card-product__count");

  if (counters.length) {
    for (let index = 0; index < counters.length; index++) {
      const counter = counters[index];

      initCounter(counter);
    }
  }

  function initCounter(counter) {
    const plus = counter.querySelector("._card-product__plus");
    const minus = counter.querySelector("._card-product__minus");
    const inputs = counter.querySelectorAll("input._card-product__value");

    plus.addEventListener("click", () => {
      const placeholder = getPlaceholder(counter);

      if (placeholder.value < 100) {
        placeholder.value = +placeholder.value + 1;
      }
    });

    minus.addEventListener("click", () => {
      const placeholder = getPlaceholder(counter);
      if (+placeholder.value - 1 >= 1) {
        placeholder.value = +placeholder.value - 1;
      }
    });

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      input.addEventListener("input", () => {
        if (input.value > 100) {
          input.value = 100;
        } else if (input.value < 0) {
          input.value = 1;
        }
      });
      input.addEventListener("blur", () => {
        if (input.value === "" || input.value == 0) input.value = 1;
      });
    }
  }

  function getPlaceholder(item) {
    return item.querySelector("input._card-product__value");
  }
}

// Проверка на поддержку webp
function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });
}

// Яндекс.Карта
function ymap() {
  let sectionMap = document.querySelector(".map");

  function ymapInit() {
    if (typeof ymaps === "undefined") return;
    let ymap = document.getElementById("ymap");

    ymaps.ready(function () {
      let map = new ymaps.Map("ymap", {
        center: [55.9823072874419, 92.89464922321378],
        zoom: 16,
        controls: ["zoomControl"],
        behaviors: ["drag"],
      });

      // Placemark
      let placemark = new ymaps.Placemark(
        [55.98332756875584, 92.89800849999992],
        {
          // Hint
          hintContent: "BIGFORMAT",
        },
        {
          iconLayout: "default#image",
          iconImageHref: "img/marker.svg",
          iconImageSize: [75, 92],
          iconImageOffset: [-40, -95],
        }
      );

      function onResizeMap() {
        if (window.innerWidth < "767") {
          //Set New center
          map.setCenter([55.98365058108414, 92.89771761825823]);
        } else if (window.innerWidth < "992") {
          map.setCenter([55.9836064830893, 92.89366217029631]);
        } else {
          map.setCenter([55.9823072874419, 92.89464922321378]);
        }
      }
      onResizeMap();

      map.geoObjects.add(placemark);

      window.onresize = function () {
        onResizeMap();
      };
    });
  }

  if (sectionMap) {
    window.addEventListener("scroll", checkYmapInit);
    checkYmapInit();
  }

  function checkYmapInit() {
    let sectionMapTop = sectionMap.getBoundingClientRect().top;
    let scrollTop = window.pageYOffset;
    let sectionMapOffsetTop = sectionMapTop + scrollTop;

    if (scrollTop + window.innerHeight > sectionMapOffsetTop) {
      ymapLoad();
      window.removeEventListener("scroll", checkYmapInit);
    }
  }

  function ymapLoad() {
    let script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    document.body.appendChild(script);
    script.onload = ymapInit;
  }
}

// Валидация форм
function formCheck() {
  // Form Validation & Send
  const forms = document.querySelectorAll("form");
  const errorMessages = {
    name: "Введите имя",
    surname: "Введите фамилию",
    patronymic: "Введите отчество",
    phone: "Введите номер телефона",
    mail: "Введите email",
    city: "Выберите город",
  };
  if (forms.length) {
    for (let i = 0; i < forms.length; i++) {
      const form = forms[i];

      form.addEventListener("submit", formSend);
    }
  }
  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(this);

    if (error === 0) {
      // ОТПРАВКА ФОРМЫ
    }
  }
  function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll("._req");

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (!emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.type === "checkbox" && !input.checked) {
        formAddError(input);
        error++;
      } else if (input.value == "") {
        formAddError(input);
        error++;
      }
    }

    return error;
  }

  const formAddError = (el) => {
    const parent = el.parentElement;
    const wrapper = parent.parentElement;
    const typeField = el.getAttribute("data-type");

    el.classList.add("_error");
    parent.classList.add("_error");

    if (typeField && !wrapper.querySelector("._error-message")) {
      const errorMessage = errorMessages[typeField];
      const errorEl = document.createElement("div");
      errorEl.classList.add("_error-message");
      errorEl.innerHTML = `*${errorMessage}`;
      wrapper.appendChild(errorEl);
    }
  };

  const formRemoveError = (el) => {
    const parent = el.parentElement;
    const wrapper = parent.parentElement;
    el.classList.remove("_error");
    parent.classList.remove("_error");

    if (
      wrapper.querySelector("._error-message") &&
      el.getAttribute("data-type")
    ) {
      const errorMessage = wrapper.querySelector("._error-message");
      wrapper.removeChild(errorMessage);
    }
  };

  // Валидация Email
  const emailTest = (input) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input.value);
  };
}

// Всплывающие окна
function popup() {
  const popupLinks = document.querySelectorAll(".popup-link");
  const body = document.querySelector("body");
  const lockPadding = document.querySelectorAll(".lock-padding");
  let unlock = true;
  const timeout = 800;

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
        const popupName = popupLink.getAttribute("href").replace("#", "");
        const currentPopup = document.getElementById(popupName);
        popupOpen(currentPopup);
        e.preventDefault();
      });

      // Popup Images Lazy Load
      popupLink.addEventListener("mouseover", () => {
        const popupName = popupLink.getAttribute("href").replace("#", "");
        const currentPopup = document.getElementById(popupName);
        const lazyImages = currentPopup.querySelectorAll(
          "img[data-src], source[data-srcset]"
        );

        if (lazyImages.length > 0) {
          lazyImages.forEach((img) => {
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
            } else if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
              img.removeAttribute("data-srcset");
            }
          });
        }
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll(".close-popup");
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener("click", function (e) {
        popupClose(el.closest(".popup"));
        e.preventDefault();
      });
    }
  }

  function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
      const popupActive = document.querySelector(".popup._open");
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      currentPopup.classList.add("_open");
      currentPopup.addEventListener("click", function (e) {
        if (!e.target.closest(".popup__content")) {
          popupClose(e.target.closest(".popup"));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove("_open");
      if (doUnlock) {
        bodyUnlock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add("_lock");

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnlock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = "0px";
        }
      }
      body.style.paddingRight = "0px";
      body.classList.remove("_lock");
    }, timeout);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  document.addEventListener("keydown", function (e) {
    if (e.which === 27) {
      const popupActive = document.querySelector(".popup._open");
      popupClose(popupActive);
    }
  });
}

// Маска на input[type=tel]
function phoneMask() {
  let phoneInputs = document.querySelectorAll("input[data-tel-input]");

  for (let phoneInput of phoneInputs) {
    phoneInput.addEventListener("keydown", onPhoneKeyDown);
    phoneInput.addEventListener("input", onPhoneInput, false);
    phoneInput.addEventListener("paste", onPhonePaste, false);
  }

  function getInputNumbersValue(input) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, "");
  }

  function onPhonePaste(e) {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    let pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      let pastedText = pasted.getData("Text");
      if (/\D/g.test(pastedText)) {
        // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
        // formatting will be in onPhoneInput handler
        input.value = inputNumbersValue;
        return;
      }
    }
  }

  function onPhoneInput(e) {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = "";

    if (!inputNumbersValue) {
      return (input.value = "");
    }

    if (input.value.length != selectionStart) {
      // Editing in the middle of input, not last symbol
      if (e.data && /\D/g.test(e.data)) {
        // Attempt to input non-numeric symbol
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == "9")
        inputNumbersValue = "7" + inputNumbersValue;
      let firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
      formattedInputValue = input.value = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  }

  function onPhoneKeyDown(e) {
    // Clear input after remove last symbol
    let inputValue = e.target.value.replace(/\D/g, "");
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = "";
    }
  }
}

// Обработка событий, связанных с header
function headerHandler() {
  const burger = document.querySelector(".bottom-header__burger");
  const mobileMenu = document.querySelector(".mobile-header");

  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    mobileMenu.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  });
}

// Обработка событий, связанных со странице заказа
function order() {
  // Показывание/сокрытие пароля
  const passwordInput = document.querySelector("._form__input_password input");
  const passwordEye = document.querySelector(".data-order__eye");

  if (passwordInput && passwordEye) {
    passwordEye.addEventListener("click", () => {
      if (passwordEye.classList.contains("_active")) {
        passwordInput.type = "password";
        passwordEye.classList.remove("_active");
      } else {
        passwordInput.type = "text";
        passwordEye.classList.add("_active");
      }
    });
  }

  // Radio input'ы в блоке с типом оплаты
  const paymentInputs = document.querySelectorAll(".payment-order__item input");
  if (paymentInputs) {
    for (let index = 0; index < paymentInputs.length; index++) {
      const input = paymentInputs[index];

      input.addEventListener("change", () => {
        closeDrops();
        if (input.hasAttribute("data-drop")) {
          const drop = input.parentElement.nextElementSibling;
          drop.classList.add("_active");
          drop.querySelector("input[type=radio]").checked = true;

          scrollingBlock.style.position = `fixed`;
          scrollingBlock.style.top = `${header.clientHeight}px`;
        }
      });
    }
  }

  // Radio input'ы в блоке с доставкой
  const deliveryInputs = document.querySelectorAll(
    ".delivery-order__item input[type=radio]"
  );
  if (deliveryInputs) {
    const addressDeliver = document.querySelectorAll(
      ".delivery-order__address-deliverer"
    );

    for (let index = 0; index < deliveryInputs.length; index++) {
      const input = deliveryInputs[index];

      input.addEventListener("change", () => {
        closeAdresses();

        if (input.hasAttribute("data-address")) {
          const label = input.nextElementSibling;

          label
            .querySelector(".delivery-order__address")
            .classList.add("_active");
        }
      });
    }

    addressDeliver.forEach((address) => {
      const input = address.querySelector("input");

      input.addEventListener("change", () => {
        const label = input.nextElementSibling;
        const span = label.querySelector("span");

        if (input.checked) {
          label.style.borderColor = `${label.getAttribute("data-color")}`;

          if (span) {
            span.style.color = `${span.getAttribute("data-color")}`;
          }
        } else {
          label.style.borderColor = "#888da7";

          if (span) {
            span.style.color = "#888da7";
          }
        }
      });
    });
  }

  function closeAdresses() {
    const addresses = document.querySelectorAll(".delivery-order__address");
    for (let index = 0; index < addresses.length; index++) {
      const address = addresses[index];
      const textInputs = address.querySelectorAll("input");
      const deliverers = address.querySelectorAll(
        ".delivery-order__address-deliverer"
      );

      address.classList.remove("_active");

      textInputs.forEach((input) => (input.value = ""));
      deliverers.forEach((deliverer) => {
        const input = deliverer.querySelector("input");
        const label = deliverer.querySelector("label");
        const span = deliverer.querySelector("span");

        input.checked = false;

        label.style.borderColor = "#888da7";
        label.classList.remove("_active");

        if (span) {
          span.style.color = "#888da7";
        }
      });
    }
  }

  function closeDrops() {
    const dropTriggers = document.querySelectorAll(
      ".payment-order__item input[data-drop]"
    );

    for (let index = 0; index < dropTriggers.length; index++) {
      const trigger = dropTriggers[index];
      const drop = trigger.parentElement.nextElementSibling;
      const subitems = drop.querySelectorAll('input[type="radio"]');

      subitems.forEach((subitem) => {
        subitem.checked = false;
      });

      drop.classList.remove("_active");
    }
  }

  // Choice of city
  const cityPlaceholder = document.querySelector(
    ".delivery-order__city-placeholder"
  );
  if (cityPlaceholder) {
    const defaultCity = cityPlaceholder.getAttribute("data-checked") || 0;
    const cities = document.querySelectorAll(".popup-order__item input");

    cities[defaultCity].checked = true;
    cityPlaceholder.innerHTML =
      cities[defaultCity].nextElementSibling.innerHTML;

    for (let index = 0; index < cities.length; index++) {
      const city = cities[index];

      city.addEventListener("change", () => {
        const text = city.nextElementSibling.innerHTML;

        cityPlaceholder.innerHTML = text;
      });
    }
  }

  // Sticky block
  var scrollingBlock = document.querySelector(".total-order");
  if (scrollingBlock) {
    // Scrollable Wrapper
    const scrollableWrapper = document.querySelector(".order__flex");
    // Top offset of scrolling block
    const offsetTopScrollingBlock = scrollableWrapper.offsetTop;
    // Header
    var header = document.querySelector(".header");

    if (scrollableWrapper.clientHeight / scrollingBlock.clientHeight >= 1.5) {
      checkScroll();
      window.addEventListener("scroll", checkScroll);
    }

    function checkScroll() {
      const scrolled = window.scrollY + header.clientHeight;

      if (scrolled > offsetTopScrollingBlock) {
        scrollingBlock.style.position = "fixed";
        scrollingBlock.style.top = `${header.clientHeight}px`;
      } else if (scrolled < offsetTopScrollingBlock) {
        scrollingBlock.style.position = "static";
      }

      // Bottom fix point
      const bottomFixPoint =
        scrollableWrapper.offsetTop +
        scrollableWrapper.clientHeight -
        +scrollingBlock.clientHeight;

      if (scrolled > bottomFixPoint) {
        scrollingBlock.style.position = "absolute";
        scrollingBlock.style.top = `${
          scrollableWrapper.clientHeight - scrollingBlock.clientHeight
        }px`;
      }
    }
  }
}

// Слайдеры
function sliders() {
  // КОНФИГ ДЛЯ СЛАЙДЕРОВ С ТОВАРАВМИ
  const generateProductSliderConfig = (className) => {
    return {
      slidesPerView: 4,
      preventClicks: true,
      slidesPerGroup: 2,
      preloadImages: false,
      // Enable lazy loading
      lazy: {
        loadPrevNext: true,
      },

      spaceBetween: 27,
      speed: 600,
      navigation: {
        nextEl: `.${className}__next`,
        prevEl: `.${className}__prev`,
      },
      pagination: {
        el: `.${className}__pagination`,
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          spaceBetween: 10,
          slidesPerView: 2,
        },
        // when window width is >= 480px
        768: {
          spaceBetween: 33,
          slidesPerView: 2,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 4,
          spaceBetween: 27,
        },
      },
    };
  };
  // КОНФИГ ДЛЯ СЛАЙДЕРОВ В ТАБАХ (ГЛАВНАЯ СТРАНИЦА)
  const generateTabSliderConfig = (mode) => {
    return {
      slidesPerView: 1,
      speed: 600,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      preloadImages: false,
      // Enable lazy loading
      lazy: {
        loadPrevNext: true,
      },

      navigation: {
        nextEl: `.card-production__next_${mode}`,
        prevEl: `.card-production__prev_${mode}`,
      },
      observeParents: true,
      observeSlideChildren: true,
      observer: true,
    };
  };

  // ГЛАВНАЯ СТРАНИЦА
  if (document.querySelector(".slider-letter")) {
    new Swiper(".slider-letter", {
      slidesPerView: 3,
      allowTouchMove: false,
      speed: 500,
      initialSlide: 1,
      centeredSlides: true,
      preventClicks: false,
      preventClicksPropagation: false,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 200,
        modifier: 3,
        slideShadows: false,
      },

      preloadImages: false,
      // Enable lazy loading
      lazy: {
        loadPrevNext: true,
      },

      navigation: {
        nextEl: ".letter__next",
        prevEl: ".letter__prev",
      },

      pagination: {
        el: ".letter__bullets",
        type: "bullets",
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          centeredSlides: false,
          effect: "slide",
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: true,
          effect: "coverflow",
          coverflowEffect: {
            rotate: 0,
            stretch: 100,
            depth: 200,
            modifier: 3,
            slideShadows: false,
          },
        },
      },
    });
  }
  if (document.querySelector(".examples__slider")) {
    new Swiper(".examples__slider", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 34,
      speed: 500,

      navigation: {
        nextEl: ".examples__next",
        prevEl: ".examples__prev",
      },

      preloadImages: false,
      // Enable lazy loading
      lazy: {
        loadPrevNext: true,
      },

      pagination: {
        el: ".examples__pagination",
        type: "bullets",
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 3,
        },
      },
    });
  }

  if (document.querySelector(".card-production__slider_design")) {
    new Swiper(
      ".card-production__slider_design",
      generateTabSliderConfig("design")
    );
  }
  if (document.querySelector(".card-production__slider_prod")) {
    new Swiper(
      ".card-production__slider_prod",
      generateTabSliderConfig("prod")
    );
  }
  if (document.querySelector(".card-production__slider_montage")) {
    new Swiper(
      ".card-production__slider_montage",
      generateTabSliderConfig("montage")
    );
  }
  // ГЛАВНАЯ СТРАНИЦА

  // СЛАЙДЕРЫ С ТОВАРАМИ
  if (document.querySelector(".popular__slider")) {
    new Swiper(".popular__slider", generateProductSliderConfig("popular"));
  }
  if (document.querySelector(".recent__slider")) {
    new Swiper(".recent__slider", generateProductSliderConfig("recent"));
  }
  // СЛАЙДЕРЫ С ТОВАРАМИ

  // СЛАЙДЕР ТОВАР/УСЛУГА
  if (document.querySelector(".product__slider")) {
    new Swiper(".product__slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 650,
      navigation: {
        nextEl: `.product__next`,
        prevEl: `.product__prev`,
      },
      loop: true,
      pagination: {
        el: `.product__pagination`,
        type: "bullets",
        clickable: true,
      },
    });
  }
  // СЛАЙДЕР ТОВАР/УСЛУГА

  if (document.querySelector(".right-form-nameplates__slider")) {
    new Swiper(".right-form-nameplates__slider", {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 16,
      speed: 800,
      grid: {
        fill: "row",
        rows: 4,
      },
      loop: false,
      navigation: {
        nextEl: ".right-form-nameplates__next",
        prevEl: ".right-form-nameplates__prev",
      },
      pagination: {
        el: `.right-form-nameplates__pagination`,
        type: "bullets",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          spaceBetween: 10,
          grid: {
            fill: "row",
            rows: 2,
          },
        },
        // when window width is >= 480px
        768: {
          spaceBetween: 16,
          grid: {
            fill: "row",
            rows: 4,
          },
        },
      },
    });
  }
}

// Анимация в блоке steps на главной странице
function steps() {
  const stepBlock = document.querySelector(".step");
  const event = isMobile.matches ? "click" : "mouseover";
  var animationEnd = false;

  if (stepBlock) {
    const circles = Array.from(
      stepBlock.querySelectorAll(".item-step__number")
    );
    const texts = stepBlock.querySelectorAll(".item-step__text");
    const placeholderNumber = stepBlock.querySelector(".step__number");
    const placeholderText = stepBlock.querySelector(".step__title");

    window.addEventListener("scroll", checkVisible);
    checkVisible();

    for (let index = 0; index < circles.length; index++) {
      const circle = circles[index];

      circle.addEventListener(event, () => {
        if (animationEnd) {
          const index = circles.indexOf(circle);

          _removeClass(circles, "_hovered");

          for (let i = 0; i <= index; i++) {
            circles[i].classList.add("_hovered");
            placeholderNumber.textContent = index + 1;
            placeholderText.textContent = texts[index].textContent;
          }
        }
      });
    }
  }

  function checkVisible() {
    let blockTop = stepBlock.getBoundingClientRect().top;
    let scrollTop = window.pageYOffset;
    let blockOffsetTop = blockTop + scrollTop;

    if (
      scrollTop + window.innerHeight / 2 >= blockOffsetTop &&
      scrollTop < blockOffsetTop + stepBlock.clientHeight
    ) {
      stepsAnimation();
      window.removeEventListener("scroll", checkVisible);
    }
  }

  function stepsAnimation() {
    let i = 0;
    const circles = Array.from(
      stepBlock.querySelectorAll(".item-step__number")
    );
    const texts = stepBlock.querySelectorAll(".item-step__text");
    const placeholderNumber = stepBlock.querySelector(".step__number");
    const placeholderText = stepBlock.querySelector(".step__title");

    const interval = setInterval(() => {
      placeholderNumber.textContent = i + 1;
      placeholderText.textContent = texts[i].textContent;
      circles[i].classList.add("_hovered");
      i++;
      if (i == circles.length) {
        clearInterval(interval);
        animationEnd = true;
      }
    }, 1000);
  }
}

// Табы
function tabs() {
  const tabsParents = document.querySelectorAll("[data-tabs]");

  if (tabsParents.length) {
    for (let index = 0; index < tabsParents.length; index++) {
      const tabsParent = tabsParents[index];

      tabsInit(tabsParent);
    }
  }

  function tabsInit(tabsParent) {
    const tabs = Array.from(tabsParent.querySelectorAll("._tabs__tab"));
    const contents = tabsParent.querySelectorAll("._contents__content");

    for (let index = 0; index < tabs.length; index++) {
      const tab = tabs[index];

      tab.addEventListener("click", () => {
        const index = tabs.indexOf(tab);

        _removeClass(tabs, "_active");
        _removeClass(contents, "_active");

        tab.classList.add("_active");
        contents[index].classList.add("_active");
      });
    }
  }
}

// Обработка события chage input[type=file]
function uploadFile() {
  const wrappers = document.querySelectorAll("._upload");

  const validateName = (name, countChars) => {
    return name.length < countChars ? name : name.slice(0, countChars) + "...";
  };

  if (wrappers.length > 0) {
    const countChars = !isMobile.matches ? 25 : 18;

    for (let i = 0; i < wrappers.length; i++) {
      const wrapper = wrappers[i];
      const btn = wrapper.querySelector("._upload__btn");
      const placeholder = wrapper.querySelector("._upload__placeholder");

      btn.addEventListener("change", (event) => {
        const fileName = event.target.files[0].name;
        if (fileName) {
          placeholder.textContent = validateName(fileName, countChars);
        }
      });
    }
  }
}

// Отображение всего каталога
function viewAll() {
  const btn = document.querySelector(".catalog-page .catalog__btn");

  if (btn) {
    const items = document.querySelectorAll(
      ".catalog-page .catalog__right .item-catalog"
    );

    btn.addEventListener("click", () => {
      for (const item of items) {
        _fadeIn(item);
      }
      btn.style.display = "none";
    });
  }
}

// Preloader
function preloader() {
  document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".preloader");

    if (preloader) {
      const circles = preloader.querySelectorAll(".loader__circle");

      setTimeout(() => {
        preloader.classList.add("_hide");
        circles.forEach(
          (circle) => (circle.style.animationPlayState = "paused")
        );
      }, 1750);
    }
  });
}

// Конструктор табличек
function tableConstructor() {
  const bg = document.querySelector(".left-form-nameplates__bg");
  if (bg) {
    document.addEventListener("click", (event) => {
      const target = event.target;

      if (target.classList.contains("left-form-nameplates__item")) {
        const activeBg = document.querySelector(
          ".left-form-nameplates__item_active"
        );
        const clickedBgUrl = target.style.backgroundImage;

        activeBg.classList.remove("left-form-nameplates__item_active");
        target.classList.add("left-form-nameplates__item_active");

        bg.style.backgroundImage = clickedBgUrl;
      }
    });
  }
}

function errorSendForm() {
  const errorForm = document.querySelector(".error__form");
  if (!errorForm) return;

  const errorTitle = document.querySelector(".error__title");
  const input = errorForm.querySelector("input");
  const btn = errorForm.querySelector("button");
  const currentUrl = window.location.href;

  input.value = currentUrl;

  errorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Отправка ajax-запроса
    // Если успешно, то
    errorTitle.textContent =
      "Спасибо! Сообщение об ошибке отправлено, мы обязательно исправим.";
    btn.classList.add("disabled");
  });
}

function anchorScroll() {
  const links = document.querySelectorAll(".info__card");
  if (!links.length) return;

  const tabs = document.querySelectorAll(".production__tab");

  for (let i = 0; i < links.length; i++) {
    const link = links[i];

    link.addEventListener("click", (e) => {
      e.preventDefault();

      const href = link.getAttribute("href").replace("#", ""),
        scrollTarget = document.getElementById(href),
        topOffset = document.querySelector(".header").offsetHeight,
        elementPosition = scrollTarget.getBoundingClientRect().top,
        offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (link.hasAttribute("data-inlay")) {
        const inlayId = link.dataset.inlay;
        const inlay = document.querySelector(`#${inlayId}`);

        _removeClass(tabs, "_active");
        inlay.classList.add("_active");
      }
    });
  }
}

// Item zoom (category.html)
function itemZoom() {
  const viewTriggers = document.querySelectorAll(".item-manufacture__view");
  if (!viewTriggers.length) return;

  for (let i = 0; i < viewTriggers.length; i++) {
    const trigger = viewTriggers[i];
    const images = trigger.dataset.images.split(", ");
    const imagesObj = images.map((imageUrl) => ({
      src: imageUrl,
      type: "image",
    }));

    trigger.addEventListener("click", () => {
      Fancybox.show(imagesObj);
    });
  }
}

// ---> Инициализация скриптов <--
preloader();
platesInit();
anchorScroll();
ymap();
itemZoom();
phoneMask();
formCheck();
isWebp();
popup();
headerHandler();
viewAll();
select();
uploadFile();
sliders();
tabs();
amount();
steps();
order();
tableConstructor();
errorSendForm();
// ---> Динамический адаптив <---
const dynamicAdapt = new DynamicAdapt("max");
dynamicAdapt.init();
// ---> Динамический адаптив <---

// ---> Lazy Load <---
const lazyLoadInstance = new LazyLoad({});
lazyLoadInstance.update();
// ---> Lazy Load <---
