import { reactive } from "vue";

export const store = reactive({
    arrayFoes: [
        {
            id: '1',
            name: 'Acid Ant',
            hp: '13',
            ac: '13',
            initiative: '+1',
        },
        {
            id: '2',
            name: 'Adult Silver Dragon',
            hp: '243',
            ac: '19',
            initiative: '+0',
        }
    ],
    editId: [],
})