enum Wood {
    INDIAN_ROSEWOOD,
    BRAZILIAN_ROSEWOOD,
    MAHOGANY,
    MAPLE,
    COCOBOLO,
    CEDAR,
    ADIRONDACK,
    ALDER,
    SITKA
}

namespace Wood {
    export function toWood(wood: Wood) {
        switch (wood) {
            case Wood.INDIAN_ROSEWOOD:
                return 'Indian Rosewood';
            case Wood.BRAZILIAN_ROSEWOOD:
                return 'Brazilian Rosewood';
            case Wood.MAHOGANY:
                return 'Mahogany';
            case Wood.MAPLE:
                return 'Maple';
            case Wood.COCOBOLO:
                return 'Cocobolo';
            case Wood.CEDAR:
                return 'Cedar';
            case Wood.ADIRONDACK:
                return 'Adirondack';
            case Wood.ALDER:
                return 'Alder';
            case Wood.SITKA:
                return 'Sitka';
            default:
                return '詳細不明';
        }
    }
}
export {
    Wood
}