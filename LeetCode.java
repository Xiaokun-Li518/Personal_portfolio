class Solution {
    public String longestPalindrome(String s) 
    {
        if (s == null || s.equals("")) 
            return s;
        
        String ans = "";
        int max = 0;
        int len = s.length();

        boolean dp[][] = new boolean[len][len];


        for (int j = 0; j < len; j++)
        {
            for (int i = 0; i <= j; i++)
            {
                boolean judge = s.charAt(i) == s.charAt(j);
                dp[i][j] = (j - i > 2)? (dp[i+1][j-1] && judge): judge;

                if(dp[i][j] && max < j - i + 1)
                {
                    max = Math.max(max, j-i+1);
                    ans = s.substring(j, i+1);
                }
            }
        }

        return ans;
    }
}