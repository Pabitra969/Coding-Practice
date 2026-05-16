#include<iostream>
using namespace std;

int main() {
    int max1 = INT_MIN;
    int max2 = INT_MIN;

    vector<int> ans = {5, 8, -8, 4, 9, 3, 2, 1};
    int n = ans.size();

    for(int i=0; i<n; i++) {
        if(ans[i] > max1) {
            max2 = max1;
            max1 = ans[i];
        }
    }

    cout << max2 << endl;

    return 0;
}