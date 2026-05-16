#include<iostream>
#include<string>
#include<algorithm>
using namespace std;

int sortString(string str) {
    int n = str.length();
    
    if(str[0] - 'a' > str[n-1] - 'a') {
        return 3;
    }
    else if(str[0] - 'a' < str[n-1] - 'a') {
        string temp = str.substr(1);
        sort(temp.begin(), temp.end());
        cout << temp << endl;
        if(str[0] - 'a' < temp[0] - 'a') {
            return 1;
        }
        else {
            return 2;
        }
    }
    else return 1;
}

int main() {
    cout << sortString("bagksfsf") << endl;

    string s = "BnBdadfF";

    vector<int> track(26,0);

    for(auto i : s) {
        if('A' <= i && i <= 'Z') {
            track[i-'A']++;
        }
        else {
            track[i-'a']++;
        }
    }
    
    int pos = -1;
    int max = INT_MIN;

    for(int i=0; i<26; i++) {
        if(track[i] > max) {
            pos = i;
            max = track[i];
        }
    }

    char ch = 'a' + pos;

    cout << ch << endl;
    return 0;
}