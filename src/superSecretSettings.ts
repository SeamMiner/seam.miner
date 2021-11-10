const elements = ["about", "ts", "hire", "brokeIt", "mbp"];

function setAbsolute() {
  for (const id of elements) {
    const el = document.getElementById(id)!;

    if (el) {
      el.style.position = "absolute";
      el.style.cursor = "grab";
      new Tracker(el);
    }
  }
}

function setRelative() {
  for (const id of elements) {
    const el = document.getElementById(id)!;

    if (el) {
      el.style.position = "relative";
      el.style.cursor = "pointer";
    }
  }
}

class Tracker {
  private pos1 = 0;

  private pos2 = 0;

  private pos3 = 0;

  private pos4 = 0;

  private el: HTMLElement;

  private zIndex = 100;

  constructor(el: HTMLElement) {
    this.el = el;
    this.el.addEventListener("mousedown", this.mouseDown);
    this.el.addEventListener("mouseup", this.mouseUp);
  }

  private mouseDown = (e: MouseEvent) => {
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    this.zIndex++;
    this.el.style.zIndex = this.zIndex + "";

    this.el.addEventListener("mousemove", this.mouseMove);
  };

  private mouseUp = () => {
    this.el.removeEventListener("mousemove", this.mouseMove);
  };

  private mouseMove = (e: MouseEvent) => {
    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;

    this.el.style.top = this.el.offsetTop - this.pos2 + "px";
    this.el.style.left = this.el.offsetLeft - this.pos1 + "px";
  };
}
