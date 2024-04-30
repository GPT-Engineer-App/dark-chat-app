import React, { useState } from "react";
import { Box, Button, ChakraProvider, Container, FormControl, FormLabel, Input, Stack, Text, theme, useToast, VStack } from "@chakra-ui/react";
import { FaLock, FaUserPlus, FaPhone, FaVideo, FaImage, FaSearch } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSignUp = () => {
    // Placeholder for sign-up logic
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="xl" centerContent>
        <Box padding="4" bg="gray.700" color="white" maxWidth="400px" borderRadius="lg">
          <VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
            <Text fontSize="2xl" fontWeight="bold">
              Sign Up
            </Text>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button leftIcon={<FaUserPlus />} colorScheme="blue" width="full" mt={4} onClick={handleSignUp}>
              Sign Up
            </Button>
          </VStack>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
