class test_BinarySearchAlgorithm {

    public static void main(String[] args) {

        int[] list = {1,2,3,4,5,6,7,8,9,10,11,12};
        int item = 6;
        int[] results;
        BinarySearchAlgorithm bsa = new BinarySearchAlgorithm();
        results = bsa.BinarySearchAlgorithm(list, item);
        System.out.println("Value 1 is " + results[0]);
        System.out.println("Value 2 is " + results[1]);
    }
}
