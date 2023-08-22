import { Box } from "@earthling-ui/primitives";
import { Text, View } from "react-native";

export default function () {
  return (
    <Box>
      <Box className="h-[200px] w-[200px] bg-black rounded-lg" />
      <Text className="text-red-500">TEST</Text>
      <View className="h-[200px] w-[200px] bg-red-500 rounded-lg"></View>
    </Box>
  );
}
