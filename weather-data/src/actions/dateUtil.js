export function DateInterval(_from, _to, date) {

    const from = () => new Date(_from)
    const to = () => new Date(_to)
    const contains = function (date) {
        if (date > _from && date < _to)
            return true
        else
            return false
    }
    return {
        from,
        to,
        contains
    }
}