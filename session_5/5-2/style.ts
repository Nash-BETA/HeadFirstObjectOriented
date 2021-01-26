enum Style{
    A,
    F
}

namespace Style{
    export function toStyle(style:Style):string{
        switch (style){
            case Style.A:
                return  'A style';
            case Style.F:
                return 'F style'
            default:
                return '詳細不明';
        }
    }
}

//enumとnamespaceを1つのファイルで使う場合はexportは別で書く
export {
    Style
}