#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char sentence[200];
    char *conj[] = {"and", "but", "or", "nor", "so", "yet", "for"};
    int found = 0;

    printf("Enter a sentence: ");
    fgets(sentence, sizeof(sentence), stdin);

    for (int i = 0; sentence[i]; i++)
        sentence[i] = tolower(sentence[i]);
        
    for (int i = 0; i < 7; i++) {
        if (strstr(sentence, conj[i]) != NULL) {
            printf("Sentence is COMPOUND.\n");
            printf("Compound word found: %s\n", conj[i]);
            found = 1;
            break;
        }
    }

    if (!found)
        printf("Sentence is SIMPLE.\n");

    return 0;
}