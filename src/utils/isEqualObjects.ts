export default function isEqualObjects(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Verifica se ambos os objetos têm as mesmas chaves
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        const isDate1 = val1 instanceof Date || typeof val1 === 'string' && !isNaN(Date.parse(val1));
        const isDate2 = val2 instanceof Date || typeof val2 === 'string' && !isNaN(Date.parse(val2));

        // Se ambos forem datas, compara como datas
        if (isDate1 && isDate2) {
            const time1 = new Date(val1).getTime();
            const time2 = new Date(val2).getTime();
            if (time1 !== time2) {
                return false;
            }
        } else {
            // Comparação direta
            if (val1 !== val2) {
                return false;
            }
        }
    }

    return true;
}
