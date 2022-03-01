import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
      title: string;

      colors: {
        header: string,
        background: string,
        searchBar: string,
        contactBox: string,
        contactBoxBorder: string,
        infoBox: string,
        infoBoxBorder: string,
        editButton: string,
        deleteButton: string,
        addButton: string,
        text: string
      }
    }
}