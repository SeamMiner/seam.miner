// This is typescript interpretation of this article https://observablehq.com/d/3fa39e15b5a6d3e8

type Size = {
  width: number;
  height: number;
  radius: number;
};

type Gradient = {
  id: string;
  color1: string;
  color2: string;
  offset1?: string;
  offset2?: string;
  cx?: string;
  cy?: string;
  r?: string;
  gradientTransform?: string;
};

type feGaussianBlur = {
  id: string;
  stdDeviation: number;
};

function sign(x: number) {
  return <any>(x > 0) - <any>(x < 0);
}

function createGradient({
  id = "undefined",
  color1 = "#141414",
  color2 = "#282828",
  offset1 = "0",
  offset2 = "1",
  cx = "0",
  cy = "0",
  r = "1",
  gradientTransform = "scale(600, 1000) translate(-0.5, -0.5)",
}: Gradient) {
  const radialGradient = `
  <radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}" gradientUnits="userSpaceOnUse" gradientTransform="${gradientTransform}">
    <stop offset="${offset1}" stop-color="${color1}"/>
    <stop offset="${offset2}" stop-color="${color2}"/>
  </radialGradient>`;
  return radialGradient;
}

function createBlur({ id = "blur", stdDeviation = 5 }: feGaussianBlur) {
  const blur = `
  <filter id="${id}">
    <feGaussianBlur in="SourceGraphic" stdDeviation="${stdDeviation}" result="blur" />
  </filter>`;
  return blur;
}

function extendedLamé(n: number, size: Size, resolution: number) {
  let d = "";

  // In a squircle, a = b, but the formula works for any (a, b)
  const halfW = size.width / 2;
  const halfH = size.height / 2;
  const a = size.radius;
  const b = size.radius;

  // Compute the first quadrant, 0 <= t <= π / 2
  // the formula is generic though, and we could go up to 2π
  // since the signs of cos(t) and sin(t) aren't hardcoded.
  // Although if you do this, you should make sure `resolution`
  // is even to make sure the shape is symmetric
  const limit = Math.PI / 2;
  const points = [];
  for (let i = 0; i < resolution; i++) {
    const t = (i / (resolution - 1)) * limit;
    const exp = 2 / n;
    const cosT = Math.cos(t);
    const sinT = Math.sin(t);
    const x = sign(cosT) * a * Math.abs(cosT) ** exp;
    const y = sign(sinT) * b * Math.abs(sinT) ** exp;
    if (i == 0) {
      d += `M${x + (halfW - a)} ${y + (halfH - b)}`;
    } else {
      d += `L${x + (halfW - a)} ${y + (halfH - b)}`;
    }
    points.push([x, y]);
  }

  // Mirror the points for the remaining quadrants, rotating clockwise.
  // Since Lamé curves are symmetric with respect to both the horizontal
  // and the vertical axis, we don't have to compute the remaining points,
  // instead we just invert the x & y signs according to a matrix
  const matrix = [
    [-1, 1],
    [-1, -1],
    [1, -1],
  ];
  for (let i = 0; i < matrix.length; i++) {
    points.reverse(); // read previous quadrant points in reverse order (LIFO)
    const [signX, signY] = matrix[i];
    for (let j = 0; j < points.length; j++) {
      const [x, y] = points[j];
      d += `L${signX * (x + (halfW - a))} ${signY * (y + (halfH - b))}`;
    }
  }

  d += "Z";
  return `d="${d}"`;
}

function createSquircleCorners(
  n: number,
  size: Size,
  resolution: number,
  Gradient: Gradient
) {
  const p = `<svg preserveAspectRatio="none" viewBox="0 0 ${size.width} ${
    size.height
  }" 
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${createGradient(Gradient)}
  </defs>
  <path ${extendedLamé(n, size, resolution)} transform="translate(${
    size.width / 2
  }, ${size.height / 2})" fill="url(#${Gradient.id})"></path>
  </svg>`;
  return p;
}

export { createSquircleCorners, Gradient };
