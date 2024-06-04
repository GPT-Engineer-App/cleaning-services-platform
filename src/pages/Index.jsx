import { useState } from "react";
import { Container, Text, VStack, HStack, Button, Box, Image, Input, FormControl, FormLabel, IconButton, Avatar, Menu, MenuButton, MenuList, MenuItem, useToast } from "@chakra-ui/react";
import { FaShoppingBasket, FaUser, FaSignOutAlt, FaSignInAlt, FaFacebook, FaGoogle, FaHome, FaCar, FaChair, FaCarpet } from "react-icons/fa";

const services = [
  { id: 1, name: "House Cleaning", category: "house", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNsZWFuaW5nfGVufDB8fHx8MTcxNzQ5OTYxNXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Room Cleaning", category: "room", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb29tJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzE3NDk5NjE2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Car Cleaning", category: "car", image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjBjbGVhbmluZ3xlbnwwfHx8fDE3MTc0OTk2MTd8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Carpet Cleaning", category: "carpet", image: "https://images.unsplash.com/photo-1527515673510-8aa78ce21f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJwZXQlMjBjbGVhbmluZ3xlbnwwfHx8fDE3MTc0OTk2MTd8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 5, name: "Chair Cleaning", category: "chair", image: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGFpciUyMGNsZWFuaW5nfGVufDB8fHx8MTcxNzQ5OTYxN3ww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [basket, setBasket] = useState([]);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const toast = useToast();

  const addToBasket = (service) => {
    setBasket([...basket, service]);
    toast({
      title: `${service.name} added to basket.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleLogin = () => {
    setUser({ name: "John Doe", email: "john@example.com" });
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    setBasket([]);
  };

  return (
    <Container maxW="container.xl" py={4}>
      <HStack justifyContent="space-between" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Cleaning Services
        </Text>
        <HStack spacing={4}>
          {user ? (
            <>
              <Menu>
                <MenuButton as={Button} rightIcon={<FaUser />}>
                  {user.name}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => setShowLogin(false)}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout} icon={<FaSignOutAlt />}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
              <IconButton aria-label="Basket" icon={<FaShoppingBasket />} onClick={() => alert("Basket clicked")} />
            </>
          ) : (
            <>
              <Button leftIcon={<FaSignInAlt />} onClick={() => setShowLogin(true)}>
                Login
              </Button>
              <Button leftIcon={<FaSignInAlt />} onClick={() => setShowRegister(true)}>
                Register
              </Button>
            </>
          )}
        </HStack>
      </HStack>

      <VStack spacing={4} align="stretch">
        {services.map((service) => (
          <Box key={service.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={service.image} alt={service.name} />
            <Box p={4}>
              <Text fontWeight="bold" fontSize="xl">
                {service.name}
              </Text>
              <Button mt={2} colorScheme="teal" onClick={() => addToBasket(service)}>
                Add to Basket
              </Button>
            </Box>
          </Box>
        ))}
      </VStack>

      {showLogin && (
        <Box mt={8} p={4} borderWidth="1px" borderRadius="lg">
          <Text fontSize="2xl" mb={4}>
            Login
          </Text>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>
          <HStack mt={4} spacing={4}>
            <Button leftIcon={<FaFacebook />} colorScheme="facebook">
              Login with Facebook
            </Button>
            <Button leftIcon={<FaGoogle />} colorScheme="red">
              Login with Google
            </Button>
          </HStack>
        </Box>
      )}

      {showRegister && (
        <Box mt={8} p={4} borderWidth="1px" borderRadius="lg">
          <Text fontSize="2xl" mb={4}>
            Register
          </Text>
          <FormControl mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="teal">Register</Button>
          <HStack mt={4} spacing={4}>
            <Button leftIcon={<FaFacebook />} colorScheme="facebook">
              Register with Facebook
            </Button>
            <Button leftIcon={<FaGoogle />} colorScheme="red">
              Register with Google
            </Button>
          </HStack>
        </Box>
      )}
    </Container>
  );
};

export default Index;
