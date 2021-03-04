class BinarySearchAlgorithm {

    int[] BinarySearchAlgorithm(list, item) {

        int low_value, attempts;
        int high_value = list.length - 1;

        while (low_value <= high_value) {
            attempts++;
            int middle = Integer.parseInt((low_value + high_value)/2);
            int [] pos_att = new int [middle, attempts];
            int hint = list[middle];
            if (hint == item) {
                return pos_att;
            } else if (hint > item) {
                high_value = middle - 1;
            } else {
                low_value = middle + 1;
            }
        }
        pos_att = [0, attempts];
        return pos_att;
    }
}