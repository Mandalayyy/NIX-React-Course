

const priorityColors = {
    'Done': '#66bb6a',
    'In Progress': '#29b6f6',
    'Open': '#64748B',
    '':'#2F4F4F'

}

export const getColorFromStatus = (priority) => {
        return priorityColors[priority];
}


export function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field]> a[field]) return -1;

        return 0;
    })
}

