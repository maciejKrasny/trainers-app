const yDigit: number[] = [2,3,4];

export function commentEnd(commnetsNumber: number) {
    if (commnetsNumber === 1) {
        return 'komentarz';
    }

    const lastDigit = commnetsNumber % 10;
    if (yDigit.indexOf(lastDigit) !== -1) {
        return 'komentarze';
    }
    return 'komentarzy';
}
