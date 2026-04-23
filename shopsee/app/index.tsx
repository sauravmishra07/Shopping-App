import { Image, Text, View, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";

export default function Index() {
  return (
    <View className="flex-1 bg-white relative">

      {/* Background Image */}
      <Image
        source={require("../assets/images/banner.jpg")}
        className="absolute top-0 left-0 w-full h-full"
        resizeMode="cover"
      />

      {/* 🔥 Blur Overlay */}
      <BlurView
        intensity={40}
        tint="dark"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Content (relative) */}
      <View className="flex-1 justify-end px-6 pb-10">

        {/* Title */}
        <Text className=" text-2xl font-serif font-bold text-center text-white mb-6">
          Welcome To Shopee
        </Text>

        {/* Login Button */}
        <TouchableOpacity activeOpacity={0.8} className="bg-blue-600 py-4 rounded-xl mb-4 shadow-md">
          <Text className="text-center text-white font-semibold text-lg">
            Login
          </Text>
        </TouchableOpacity>

        {/* Signup Button */}
        <TouchableOpacity activeOpacity={0.8} className="bg-blue-100 py-4 rounded-xl mb-4">
          <Text className="text-center text-blue-700 font-semibold text-lg">
            Sign Up
          </Text>
        </TouchableOpacity>

        {/* Guest Link */}
        <TouchableOpacity activeOpacity={0.7}>
          <Text className="text-center text-white underline">
            Continue as Guest
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}