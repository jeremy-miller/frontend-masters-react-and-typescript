import { rgb } from 'color-convert';

type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgb: [number, number, number];
  };
};

type ColorState = {
  hexColor: string;
};

export type AdjustColorActions = UpdateHexColorAction | UpdateRGBColorAction;

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export function colorReducer(
  state: ColorState = initialState,
  action: AdjustColorActions,
) {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  } else if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb);
    return { ...state, hexColor };
  }

  return state;
}
