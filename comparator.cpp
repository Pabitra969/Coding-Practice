#include<iostream>
#include <utility>
#include <vector> 
#include <algorithm>
using namespace std;

static bool comparator(pair<int,char>&a, pair<int,char>&b) {
    return a.first < b.first; 
}

int main() {
    vector<int> v = {1,2,3,4,7,9}; // Changed {2,3} to {2,'e'} as char is expected

    sort(v.begin(), v.end(), greater<>()); // Correct usage of std::sort

    for(int i=0; i<v.size(); i++) {
        cout << v[i] << endl;
    }

    return 0;
}