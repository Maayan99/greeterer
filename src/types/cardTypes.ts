export interface CardTemplate {
  id: string;
  name: string;
  svg: string;
  fields: CardElement[];
}

export interface CardElement {
  id: string;
  type: 'text' | 'svg';
  content: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  backgroundColor?: string;
  gradient?: {
    type: 'linear' | 'radial';
    colors: string[];
    stops: number[];
  };
}
