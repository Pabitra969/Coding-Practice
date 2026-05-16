#include <stdio.h>

int main() {
    int ch;
    int lines = 0, characters = 0;

    printf("Enter text (Press Ctrl+D to stop on Linux/Mac OR Ctrl+Z on Windows):\n");

    while ((ch = getchar()) != EOF) {
        characters++;

        if (ch == '\n')
            lines++;
    }

    printf("\nTotal characters: %d\n", characters);
    printf("Total lines: %d\n", lines);

    return 0;
}