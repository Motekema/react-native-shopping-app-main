import React from 'react'
import { Text,StyleSheet,Button } from 'react-native'

function EditProfileScreen() {
  return (
    <view style={styles.container}>
       <Text>Edit Profile</Text>
       <Button
       title='Click Here'
       onPress={() => alert('Button Clicked!')}
       />
    </view>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})