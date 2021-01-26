enum Builder {
    FENDER,
    MARTIN,
    GIBSON,
    COLLINGS,
    OLSON,
    RYAN,
    PRS,
    ANY
}

namespace Builder{
    export function toBuilder(builder:Builder){
        switch (builder){
            case Builder.FENDER:
                return 'Fender';
            case Builder.MARTIN:
                return 'Martin';
            case Builder.GIBSON:
                return 'Gibson';
            case Builder.COLLINGS:
                return 'Collings';
            case Builder.OLSON:
                return 'Olson';
            case Builder.RYAN:
                return 'Ryan';
            case Builder.PRS:
                return 'PRS';
            default:
                return 'Unspecified';
        }
    }
}

export {
    Builder
}