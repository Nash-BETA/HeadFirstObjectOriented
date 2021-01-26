enum Type{
    ACOUSTIC,
    ELECTRIC
}

namespace Type {
    export function toType(type: Type){
        switch(type){
            case Type.ACOUSTIC:
                return 'acoustic';
            case Type.ELECTRIC:
                return 'electric';
            default:
                return '詳細不明';
        }
    }
}
export {
    Type,
}