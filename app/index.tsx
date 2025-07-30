import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 justify-center items-center bg-gray-50"
    >
      <View className="bg-white p-6 rounded-xl shadow-lg mx-4">
        <Text className="text-2xl font-bold text-gray-800 text-center mb-4">
          NativeWind funcionando
        </Text>
      </View>
    </View>
  );
}
