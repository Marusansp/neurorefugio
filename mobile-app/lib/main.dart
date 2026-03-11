import 'package:flutter/material.dart';
import 'screens/customer_home_screen.dart';
import 'screens/integrator_home_screen.dart';

void main() {
  runApp(const VieiraSolarApp());
}

class VieiraSolarApp extends StatelessWidget {
  const VieiraSolarApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Vieira's Solar Platform",
      theme: ThemeData.dark(useMaterial3: true),
      home: const AppSwitcherScreen(),
    );
  }
}

class AppSwitcherScreen extends StatelessWidget {
  const AppSwitcherScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Escolha o modo")),
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ElevatedButton(
              onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const CustomerHomeScreen())),
              child: const Text('App Cliente'),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const IntegratorHomeScreen())),
              child: const Text('App Integrador'),
            ),
          ],
        ),
      ),
    );
  }
}
