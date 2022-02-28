import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
      title: string;

      colors: {
        header: string;
        background: string;
        searchInput: string;
        contactBox: string;
        contactBoxBorder: string;
        infoBox: string;
        boxButton: string;
        deleteButton: string;
        addButton: string;
        text: string;
      }
    }
}