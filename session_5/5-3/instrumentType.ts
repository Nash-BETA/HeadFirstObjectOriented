enum InstrumentType{
    GUITAR,
    MONDOLIN
}

namespace InstrumentType {
    function toInstrument(instrumentType: InstrumentType){
        switch (instrumentType){
            case InstrumentType.GUITAR:
                return 'ギター';
            case InstrumentType.MONDOLIN:
                return 'モンドリン';
            default:
                return '不明な楽器';
        }
    }
}

export {
    InstrumentType
}